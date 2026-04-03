import PageTitle from "../../shared/components/page-title/PageTitle";
import StatsTitle from "../../shared/components/stats-title/StatsTitle";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import CostOverview from "./components/CostsOverview";
import "./styles/costAnalysis.css";
import AllCosts from "./components/AllCosts";

export default function CostAnalysis() {
  return (
    <div className="navbar-page cost-analysis-page">
      <PageTitle
        title="Cost Analysis"
        rightComponent={
          <StatsTitle
            stats={[
              {
                title: "Monthly Cost",
                subtitle: "$123",
                icon: FaCircleDollarToSlot,
              },
            ]}
          />
        }
      />
      <div className="cost-analysis-content">
        <CostOverview />
        <AllCosts />
      </div>
    </div>
  );
}
