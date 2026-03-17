import PageTitle from "../../shared/components/page-title/PageTitle";
import { PlugDTO } from "./types/PlugDTO";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "../../api/api";
import StatsTitle, {
  StatsElement,
} from "../../shared/components/stats-title/StatsTitle";
import { MdDevices } from "react-icons/md";
import { FaBolt } from "react-icons/fa6";
import "./styles/singlePlug.css";
import PlugOverview from "../single-room/components/PlugOverview";
import TodaySchedules from "../../shared/components/today-schedules/TodaySchedules";

export default function SinglePlug() {
  const { plugId } = useParams();
  const [plugInfo, setPlugInfo] = useState<PlugDTO | null>(null);
  const [stats, setStats] = useState<StatsElement[]>([]);

  // Get plug info
  const getPlugInfo = async () => {
    try {
      const { data } = await api.get<PlugDTO>(`/plugs/${plugId}`);
      setPlugInfo(data);
      setStats([
        {
          title: "Device",
          subtitle: data.isDeviceConnected ? "Connected" : "Not Connected",
          icon: MdDevices,
        },
        {
          title: "Consumption",
          subtitle: `${data.currentConsumption} kWh`,
          icon: FaBolt,
          iconSize: 30,
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  // Toggle plug state
  const togglePlugState = async () => {
    try {
      await api.put("/plugs/status/set", {
        plugId,
        switchOn: !plugInfo?.isOn,
      });

      setPlugInfo((prev) => {
        if (prev) {
          return { ...prev, isOn: !prev.isOn };
        }

        return prev;
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void getPlugInfo();
  }, []);

  if (!plugInfo) return <p>Loading</p>;

  return (
    <div className="navbar-page">
      <PageTitle
        title={plugInfo.name}
        rightComponent={<StatsTitle stats={stats} />}
        subtitle={plugInfo.isConstant ? "Constant" : undefined}
      />
      <div className="single-plug-content-container">
        <PlugOverview plugInfo={plugInfo} togglePlugState={togglePlugState} />
        <TodaySchedules plugIds={[plugInfo.id]} />
      </div>
    </div>
  );
}
