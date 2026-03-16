import "../styles/roomsStats.css";
import { FaDoorClosed, FaBolt } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";
import { IconType } from "react-icons";
import { useState } from "react";

interface StatsElement {
  title: string;
  subtitle: string;
  icon: IconType;
  iconSize?: number;
}

// TODO: don't make the stats static
export default function RoomsStats() {
  const [stats, setStats] = useState<StatsElement[]>([
    {
      title: "Rooms",
      subtitle: "8",
      icon: FaDoorClosed,
    },
    {
      title: "Active",
      subtitle: "20",
      icon: MdDevices,
    },
    {
      title: "Consumption",
      subtitle: "100 kWh",
      icon: FaBolt,
      iconSize: 35,
    },
  ]);

  return (
    <div className="room-stats-container">
      {stats.map((stats, idx) => {
        const Icon = stats.icon;

        return (
          <div key={idx} className="stats-container">
            <Icon size={stats.iconSize ?? 40} color="var(--primary-500)" />
            <div>
              <p>{stats.title}</p>
              <h6>{stats.subtitle}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}
