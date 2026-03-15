import React, { ReactNode, useEffect, useMemo, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer, initialAuthState } from "./authReducer";
import { keycloakConfig } from "./keycloak";

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  // Sign in
  useEffect(() => {
    const run = async () => {
      try {
        const authenticated = await keycloakConfig.init({
          onLoad: "check-sso",
        });

        if (authenticated) {
          dispatch({ type: "SIGN_IN" });
          dispatch({
            type: "SET_USER_INFO",
            payload: keycloakConfig.tokenParsed,
          });
        } else {
          dispatch({ type: "SIGN_OUT" });
        }
      } catch {
        dispatch({ type: "SIGN_OUT" });
      } finally {
        dispatch({ type: "RESTORE_DONE" });
      }
    };

    void run();
  }, []);

  // Define the state and the signIn and signOut functions
  const value = useMemo(
    () => ({
      state,
      signIn: () => keycloakConfig.login(),
      signOut: async () => {
        await keycloakConfig.logout({ redirectUri: window.location.origin });
        dispatch({ type: "SIGN_OUT" });
      },
    }),
    [state],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
