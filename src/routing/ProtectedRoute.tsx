import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export default function ProtectedRoute() {
  const { state } = useAuth();
  const { isSignedIn, isLoading, isRestored } = state;

  if (isLoading || isRestored) return null;
  if (!isSignedIn) return <Navigate to="/login" replace />;

  return <Outlet />;
}
