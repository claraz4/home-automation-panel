import {
  FaDoorClosed,
  FaPlug,
  FaCalendarDays,
  FaBolt,
  FaChartSimple,
  FaGear,
  FaHouse,
  FaCircleDollarToSlot,
} from "react-icons/fa6";
import { IconType } from "react-icons";
import "./navbar.css";
import { NavLink } from "react-router-dom";

interface IconElement {
  route: string;
  icon: IconType;
  size?: number;
}

const ICONS: IconElement[] = [
  { route: "/", icon: FaHouse },
  { route: "/rooms", icon: FaDoorClosed },
  { route: "/plugs", icon: FaPlug },
  { route: "/schedules", icon: FaCalendarDays },
  { route: "/policies", icon: FaBolt },
  { route: "/analytics", icon: FaChartSimple },
  { route: "/costs", icon: FaCircleDollarToSlot, size: 27 },
  { route: "/settings", icon: FaGear },
];

export default function Navbar() {
  return (
    <div className="navbar-container">
      {ICONS.map((icon, idx) => {
        const { icon: Icon, size } = icon;
        const { route } = icon;

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
                size={size ?? 25}
                color={isActive ? "var(--primary-500)" : "white"}
              />
            )}
          </NavLink>
        );
      })}
    </div>
  );
}
