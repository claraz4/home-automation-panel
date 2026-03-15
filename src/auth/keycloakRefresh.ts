import { keycloakConfig } from "./keycloak";

export async function getValidAccessToken(): Promise<string | null> {
  try {
    await keycloakConfig.updateToken(10); // refresh if token expires in less than 10 seconds
    return keycloakConfig.token ?? null;
  } catch {
    return null; // session is dead
  }
}

export async function forceRefreshAccessToken(): Promise<string> {
  await keycloakConfig.updateToken(9999); // force refresh regardless
  if (!keycloakConfig.token) throw new Error("No token after refresh");
  return keycloakConfig.token;
}

export async function logoutLocal() {
  await keycloakConfig.logout();
}
