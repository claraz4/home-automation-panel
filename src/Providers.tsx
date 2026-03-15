import { AuthProvider } from "./auth/AuthProvider";
import { AuthInterceptorProvider } from "./auth/AuthInterceptorProvider";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <AuthProvider>
      <AuthInterceptorProvider>{children}</AuthInterceptorProvider>
    </AuthProvider>
  );
}
