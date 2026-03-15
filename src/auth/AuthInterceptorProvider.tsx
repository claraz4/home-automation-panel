import { ReactNode, useEffect } from "react";
import { api, householdApi } from "../api/api";
import {
  forceRefreshAccessToken,
  getValidAccessToken,
  logoutLocal,
} from "./keycloakRefresh";
import { useAuth } from "./useAuth";
import { detectBackend } from "../api/backendUtils";

export function AuthInterceptorProvider({ children }: { children: ReactNode }) {
  const { signOut } = useAuth();

  useEffect(() => {
    const setup = (instance: any) => {
      const reqId = instance.interceptors.request.use(
        async (config: any) => {
          try {
            const token = await getValidAccessToken();

            if (token) {
              config.headers = config.headers ?? {};
              config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
          } catch (error) {
            // 400 error from the keycloak API to get the tokens
            await logoutLocal();
            void signOut();
            return Promise.reject(error);
          }
        },
        (error: any) => Promise.reject(error),
      );

      const resId = instance.interceptors.response.use(
        (res: any) => res,
        async (error: any) => {
          const { config, response } = error;

          if (!response) {
            // There is no internet connection
            if (!navigator.onLine) {
              console.log("Device has no internet connection");
              throw error;
            }

            const currentBase = instance.defaults.baseURL;

            if (currentBase.includes(import.meta.env.VITE_BACKEND_URL)) {
              // we are on the local backend
              await detectBackend();
              return instance(config);
            }
          }

          if (!config || response?.status !== 401) {
            // not an error related to authentication
            throw error;
          }

          // The /token API generated a
          if (config.url?.includes("/protocol/openid-connect/token")) {
            await logoutLocal();
            void signOut();
            throw error;
          }

          try {
            // access token is refreshed for 401 errors and the requests will be retried
            const token = await forceRefreshAccessToken();

            return instance({
              ...config,
              headers: {
                ...config.headers,
                Authorization: `Bearer ${token}`,
              },
            });
          } catch (error: any) {
            await logoutLocal();
            void signOut();
            throw error;
          }
        },
      );

      return () => {
        instance.interceptors.request.eject(reqId);
        instance.interceptors.response.eject(resId);
      };
    };

    const cleanups = [setup(api), setup(householdApi)];

    return () => {
      cleanups.forEach((c) => c && c());
    };
  }, []);

  return <>{children}</>;
}
