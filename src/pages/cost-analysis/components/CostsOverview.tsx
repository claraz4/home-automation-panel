import CostPerSource from "./CostPerSource";
import React from "react";
import "../styles/costsOverview.css";
import WeeklyBarChart from "../../../shared/components/weekly-bar-chart/WeeklyBarChart";

const DATA = [10, 43, 2, 5];
const DATA2 = [8, 2, 52, 1];

export default function CostOverview() {
  return (
    <div className="cost-overview">
      <div className="total-costs-container">
        <CostPerSource sourceName="EDL" message="192 kWh total" cost={42} />
        <CostPerSource
          sourceName="Generator"
          message="10A subscription"
          cost={123}
          invert
        />
      </div>
      <WeeklyBarChart
        data={DATA}
        dataTitle="EDL"
        data2={DATA2}
        dataTitle2="Private"
        dataUnit="$"
      />
    </div>
  );
}
