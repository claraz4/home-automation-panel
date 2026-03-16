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
import { Link } from "react-router-dom";

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
          <Link
            to={route}
            className={isSelected ? "selected-icon-container" : ""}
            key={idx}
          >
            <Icon
              size={25}
              color={isSelected ? "var(--primary-500)" : "white"}
            />
          </Link>
        );
      })}
    </div>
  );
}
