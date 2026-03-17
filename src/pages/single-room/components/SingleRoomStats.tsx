import { FaBolt, FaPlug } from "react-icons/fa6";
import { useEffect, useState } from "react";
import StatsTitle, {
  StatsElement,
} from "../../../shared/components/stats-title/StatsTitle";
import { isStatFound } from "../../../shared/components/stats-title/statsHelper";

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
    setStats((prev) => {
      const statFound = isStatFound("Plugs", prev);

      if (!statFound) {
        return [
          ...prev,
          {
            title: "Plugs",
            subtitle: "" + totalPlugs,
            icon: FaPlug,
            iconSize: 35,
          },
        ];
      } else {
        return prev.map((s) =>
          s.title === "Plugs" ? { ...s, subtitle: "" + totalPlugs } : s,
        );
      }
    });
  }, [totalPlugs]);

  return <StatsTitle stats={stats} />;
}
