import "./styles/analytics.css";
import StatsTitle from "../../shared/components/stats-title/StatsTitle";
import { FaBolt, FaCircleDollarToSlot } from "react-icons/fa6";
import PageTitle from "../../shared/components/page-title/PageTitle";
import PowerSourceDistribution from "./components/PowerSourceDistribution";
import Timeline from "./components/Timeline";

export default function Analytics() {
  return (
    <div className="navbar-page analytics-page">
      <PageTitle
        title="Analytics"
        rightComponent={
          <StatsTitle
            stats={[
              {
                title: "Monthly Consumption",
                subtitle: "128 kWh",
                icon: FaBolt,
              },
              {
                title: "Monthly Cost",
                subtitle: "$123",
                icon: FaCircleDollarToSlot,
              },
            ]}
          />
        }
      />
      <div className="analytics-content">
        <PowerSourceDistribution />
        <Timeline />
      </div>
    </div>
  );
}
