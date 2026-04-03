import ProgressList from "../../../shared/components/progress-list/ProgressList";
import WeeklyBarChart from "../../../shared/components/weekly-bar-chart/WeeklyBarChart";
import "../styles/powerSourceDistribution.css";

const data = [4, 6, 7, 8, 2];

export default function PowerSourceDistribution() {
  return (
    <div className="power-source-distribution-container">
      <ProgressList
        data={[
          { label: "Main Grid (EDL)", value: 64 },
          { label: "Private Generator", value: 28 },
          { label: "Solar Power", value: 8 },
        ]}
      />

      <WeeklyBarChart
        data={data}
        dataTitle="EDL"
        data2={[1, 2, 3, 4]}
        dataTitle2="Private"
      />
    </div>
  );
}
