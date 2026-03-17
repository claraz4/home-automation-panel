import { FaBolt, FaPlug } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";
import { useEffect, useState } from "react";
import StatsTitle, {
  StatsElement,
} from "../../../shared/components/stats-title/StatsTitle";

interface Props {
  totalPlugs: number;
}

// TODO: don't make the stats static
export default function SingleRoomStats({ totalPlugs }: Props) {
  const [stats, setStats] = useState<StatsElement[]>([
    {
      title: "Consumption",
      subtitle: "100 kWh",
      icon: FaBolt,
      iconSize: 35,
    },
  ]);

  useEffect(() => {
    setStats((prev) => [
      ...prev,
      {
        title: "Plugs",
        subtitle: `${totalPlugs}`,
        icon: FaPlug,
        iconSize: 35,
      },
    ]);
  }, [totalPlugs]);

  return <StatsTitle stats={stats} />;
}
