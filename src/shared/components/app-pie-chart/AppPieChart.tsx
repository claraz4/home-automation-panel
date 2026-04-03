import { Pie, PieChart, Sector } from "recharts";
import { useState } from "react";
import "./appPieChart.css";

const COLORS_USED: string[] = [
  "var(--primary-500)",
  "var(--pink-500)",
  "var(--cyan-500)",
  "var(--purple-500)",
];

interface AppPieChartItem {
  name: string;
  value: number;
}

interface AppPieChartProps {
  data: AppPieChartItem[];
  width?: number;
  height?: number;
}

export default function AppPieChart({
  data,
  width = 350,
  height = 350,
}: AppPieChartProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const dataEdited = data.map((item, idx) => ({
    ...item,
    fill: COLORS_USED[idx % COLORS_USED.length],
  }));

  return (
    <PieChart width={width} height={height}>
      <Pie
        data={dataEdited}
        innerRadius="60%"
        outerRadius="90%"
        cornerRadius={5}
        paddingAngle={2}
        dataKey="value"
        isAnimationActive={true}
        onClick={(_, index) => setSelectedIndex(index)}
        shape={(props, index) => {
          const isActive = index === selectedIndex;

          return (
            <Sector
              {...props}
              outerRadius={
                isActive ? props.outerRadius + 10 : props.outerRadius
              }
            />
          );
        }}
      />

      <foreignObject x="30%" y="25%" width="40%" height="50%">
        <div
          className="pie-chart-center-container"
          style={{ color: dataEdited[selectedIndex].fill }}
        >
          <p>{dataEdited[selectedIndex].name}</p>
          <p className="pie-chart-center-percent">
            {dataEdited[selectedIndex].value}%
          </p>
        </div>
      </foreignObject>
    </PieChart>
  );
}
