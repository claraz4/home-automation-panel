import { FaDoorClosed, FaBolt } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";
import { useState } from "react";
import StatsTitle, {
  StatsElement,
} from "../../../shared/components/stats-title/StatsTitle";

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

  return <StatsTitle stats={stats} />;
}
