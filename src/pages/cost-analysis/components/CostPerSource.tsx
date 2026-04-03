import "../styles/costsOverview.css";
import { IoFlash } from "react-icons/io5";

interface CostPerSourceProps {
  sourceName: string;
  message: string;
  cost: number;
  invert?: boolean;
}

export default function CostPerSource({
  sourceName,
  message,
  cost,
  invert = false,
}: CostPerSourceProps) {
  const mainColor = invert ? "white" : "var(--primary-500)";
  const backgroundColor = invert ? "var(--primary-500)" : "white";
  const textColor = invert ? "white" : "var(--text)";
  const brighterColor = invert ? "rgba(255,255,255,0.4)" : "var(--primary-100)";
  const secondaryColor = invert ? "rgba(255,255,255,0.7)" : "var(--gray-400)";

  return (
    <div
      className="cost-per-source-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="cost-per-source-title">
        <div
          className="cost-per-source-icon-container"
          style={{ backgroundColor: brighterColor }}
        >
          <IoFlash size={20} color={mainColor} />
        </div>

        <p className="cost-per-source-name" style={{ color: mainColor }}>
          {sourceName}
        </p>
      </div>

      <div>
        <h5 style={{ color: textColor }}>${cost}</h5>
        <p style={{ color: secondaryColor }}>{message}</p>
      </div>
    </div>
  );
}
