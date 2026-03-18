import { FaArrowTrendDown } from "react-icons/fa6";
import "../styles/general-information.css";
import TodaySchedules from "../../../shared/components/schedules-list/SchedulesList";
import { householdApi } from "../../../api/api";
import CurrentSourceDTO from "../types/CurrentSourceDTO";
import { useEffect, useState } from "react";

// TODO: Current consumption API not implemented it yet. Add it when done
export default function GeneralInformation() {
  const [currentSource, setCurrentSource] = useState<CurrentSourceDTO | null>(
    null,
  );

  const getSourceInfo = async () => {
    try {
      const { data } =
        await householdApi.get<CurrentSourceDTO>("/source/current");
      setCurrentSource(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void getSourceInfo();
  }, []);

  return (
    <div className="general-info-container">
      <div className="source-consumption-container">
        <div className="source-consumption-info">
          <p>{currentSource?.name}</p>
          <h3>{`${currentSource?.voltage} V`}</h3>
          <div className="source-status-container">
            <div className="status-circle" />
            <p style={{ color: "var(--success)" }}>Stable</p>
          </div>
        </div>
        <hr style={{ width: "75%", alignSelf: "flex-start" }} />
        <div className="source-consumption-info">
          <p>Consumption</p>
          <h3>100 kWh</h3>
          <div className="source-status-container">
            <FaArrowTrendDown size={30} color="var(--success)" />
            <p style={{ color: "var(--success)" }}>1% from yesterday</p>
          </div>
        </div>
      </div>
      <TodaySchedules />
    </div>
  );
}
