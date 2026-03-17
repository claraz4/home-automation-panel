import {
  FaDoorClosed,
  FaPlug,
  FaCalendarDays,
  FaBolt,
  FaChartSimple,
  FaGear,
  FaHouse,
} from "react-icons/fa6";
import { IconType } from "react-icons";
import "./navbar.css";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

interface IconElement {
  route: string;
  icon: IconType;
}

const ICONS: IconElement[] = [
  { route: "/", icon: FaHouse },
  { route: "/rooms", icon: FaDoorClosed },
  { route: "/plugs", icon: FaPlug },
  { route: "/schedules", icon: FaCalendarDays },
  { route: "/policies", icon: FaBolt },
  { route: "/analytics", icon: FaChartSimple },
  { route: "/settings", icon: FaGear },
];

export default function Navbar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="navbar-container">
      {ICONS.map((icon, idx) => {
        const Icon = icon.icon;
        const { route } = icon;
        const isSelected = pathname === route;

        return (
          <NavLink
            to={route}
            className={({ isActive }) =>
              `navbar-icon-container ${isActive ? "selected-navbar-icon-container" : ""}`
            }
            key={idx}
          >
            {({ isActive }) => (
              <Icon
                size={25}
                color={isActive ? "var(--primary-500)" : "white"}
              />
            )}
          </NavLink>
        );
      })}
    </div>
  );
}
