import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import { AuthInterceptorProvider } from "./auth/AuthInterceptorProvider";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import { keycloakConfig } from "./auth/keycloak";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    element: <ProtectedRoute />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <AuthInterceptorProvider>
        <RouterProvider router={router} />
      </AuthInterceptorProvider>
    </AuthProvider>
  );
}
