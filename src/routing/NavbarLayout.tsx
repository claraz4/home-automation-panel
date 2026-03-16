import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function NavbarLayout() {
  return (
    <div className="navbar-layout-container">
      <Navbar />
      <Outlet />
    </div>
  );
}
