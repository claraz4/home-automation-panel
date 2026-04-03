import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { useState } from "react";
import "./weeklyBarChart.css";

const COLORS = {
  data1: {
    selected: "var(--primary-500)",
    unfocused: "var(--primary-200)",
  },
  data2: {
    selected: "var(--pink-500)",
    unfocused: "var(--pink-200)",
  },
};

const idxToDay = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface WeeklyBarChartProps {
  data: number[];
  dataTitle: string;
  data2?: number[];
  dataTitle2?: string;
  dataUnit?: string;
  width?: number;
  height?: number;
}

export default function WeeklyBarChart({
  data,
  data2,
  width = 260,
  height = 174,
  dataTitle,
  dataTitle2,
  dataUnit = "h",
}: WeeklyBarChartProps) {
  const [selectedIndex, setSelectedIndex] = useState(data.length - 1);

  const isStacked = !!data2;

  const chartData = idxToDay.map((day, i) => ({
    name: day,
    value1: data[i] ?? 0,
    value2: data2?.[i] ?? 0,
    index: i,
  }));

  return (
    <div className="weekly-bar-chart-full-container">
      <BarChart data={chartData} width={width} height={height}>
        <XAxis
          dataKey="name"
          tick={{
            fill: "var(--primary-400)",
            fontWeight: 400,
            fontSize: "14px",
          }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide />
        {!isStacked && (
          <Bar
            dataKey="value1"
            onClick={(_, index) => setSelectedIndex(index)}
            radius={4}
            shape={(props: any) => {
              const { x, y, width, height, index } = props;
              const fill =
                index === selectedIndex
                  ? COLORS.data1.selected
                  : COLORS.data1.unfocused;

              return (
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={fill}
                  rx={4}
                  ry={4}
                  onClick={() => setSelectedIndex(index)}
                  style={{ cursor: "pointer" }}
                />
              );
            }}
          />
        )}

        {isStacked && (
          <>
            <Bar
              dataKey="value1"
              stackId="a"
              shape={(props: any) => {
                const { x, y, width, height, index } = props;
                const fill =
                  index === selectedIndex
                    ? COLORS.data1.selected
                    : COLORS.data1.unfocused;

                return (
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={fill}
                    rx={3}
                    ry={3}
                    onClick={() => setSelectedIndex(index)}
                  />
                );
              }}
            />

            <Bar
              dataKey="value2"
              stackId="a"
              shape={(props: any) => {
                const { x, y, width, height, index } = props;
                const fill =
                  index === selectedIndex
                    ? COLORS.data2.selected
                    : COLORS.data2.unfocused;

                return (
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={fill}
                    rx={3}
                    ry={3}
                    onClick={() => setSelectedIndex(index)}
                  />
                );
              }}
            />
          </>
        )}
      </BarChart>

      {isStacked && (
        <div className="weekly-bar-chart-values-container">
          <div style={{ color: COLORS.data1.selected }}>
            <p>{dataTitle}</p>
            <h6>
              {data[selectedIndex] ?? 0} {dataUnit}
            </h6>
          </div>

          <div style={{ color: COLORS.data2.selected }}>
            <p>{dataTitle2}</p>
            <h6>
              {data2[selectedIndex] ?? 0} {dataUnit}
            </h6>
          </div>
        </div>
      )}
    </div>
  );
}
