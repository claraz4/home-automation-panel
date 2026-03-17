import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import { AuthInterceptorProvider } from "./auth/AuthInterceptorProvider";
import ProtectedRoute from "./routing/ProtectedRoute";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import { useEffect } from "react";
import { detectBackend } from "./api/backendUtils";
import Navbar from "./routing/Navbar";
import Rooms from "./pages/rooms/Rooms";
import MainLayout from "./routing/NavbarLayout";
import SingleRoom from "./pages/single-room/SingleRoom";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/", element: <Home /> },
      {
        element: <MainLayout />,
        children: [
          { path: "/rooms", element: <Rooms /> },
          { path: "/rooms/:roomId", element: <SingleRoom /> },
        ],
      },
    ],
  },
]);

export default function App() {
  useEffect(() => {
    const handleOnline = async () => {
      await detectBackend();
    };

    void handleOnline();

    window.addEventListener("online", handleOnline);
    return () => {
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <AuthProvider>
      <AuthInterceptorProvider>
        <RouterProvider router={router} />
      </AuthInterceptorProvider>
    </AuthProvider>
  );
}
