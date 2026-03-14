import { FaArrowTrendDown } from "react-icons/fa6";
import "../styles/general-information.css";
import TodaySchedules from "./TodaySchedules";

export default function GeneralInformation() {
  return (
    <div className="general-info-container">
      <div className="source-consumption-container">
        <div className="source-consumption-info">
          <p>Private Generator</p>
          <h3>220 V</h3>
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
