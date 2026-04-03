import "./progressList.css";

const COLORS: string[] = [
  "var(--primary-500)",
  "var(--pink-500)",
  "var(--cyan-500)",
  "var(--purple-500)",
];

export type ProgressListItem = {
  label: string;
  value: number;
};

interface ProgressListProps {
  data: ProgressListItem[];
}

export default function ProgressList({ data }: ProgressListProps) {
  return (
    <div className="progress-list-container">
      {data.map((item, index) => {
        const safeValue = Math.max(0, Math.min(100, item.value));
        const color = COLORS[index];

        return (
          <div key={index} className="progress-list-row">
            <div className="progress-list-header">
              <span className="progress-list-label">{item.label}</span>
              <span className="progress-list-value" style={{ color }}>
                {safeValue}%
              </span>
            </div>

            <div className="progress-list-bar-background">
              <div
                className="progress-list-bar-fill"
                style={{
                  width: `${safeValue}%`,
                  backgroundColor: color,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
