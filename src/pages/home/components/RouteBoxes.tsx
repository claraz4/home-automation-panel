import { Link } from "react-router-dom";
import "../styles/route-boxes.css";
import { IconType } from "react-icons";
import {
  FaDoorClosed,
  FaPlug,
  FaCalendarDays,
  FaBolt,
  FaChartSimple,
  FaGear,
} from "react-icons/fa6";

interface Route {
  name: string;
  href: string;
  icon: IconType;
}

const ROUTES: Route[] = [
  {
    name: "Rooms",
    href: "/rooms",
    icon: FaDoorClosed,
  },
  {
    name: "Plugs",
    href: "/plugs",
    icon: FaPlug,
  },
  {
    name: "Schedules",
    href: "/schedules",
    icon: FaCalendarDays,
  },
  {
    name: "Policies",
    href: "/policies",
    icon: FaBolt,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: FaChartSimple,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: FaGear,
  },
];

export default function RouteBoxes() {
  return (
    <div className="route-boxes-container">
      {ROUTES.map((route, idx) => {
        const Icon = route.icon;

        return (
          <Link to={route.href} className="route-box-container" key={idx}>
            <Icon size={50} color={"var(--primary-500)"} />
            <h6 style={{ margin: 0 }}>{route.name.toUpperCase()}</h6>
          </Link>
        );
      })}
    </div>
  );
}
