import "../styles/timeline.css";
import TimelineCard from "./TimelineCard";
import { TimelineItem } from "../types/TimelineItem";

const data: TimelineItem[] = [
  {
    time: "14:22",
    date: "Aug 24, 2024",
    title: "EDL Outage Detected",
    description: "Switch to private generator.",
    tag: "critical",
  },
  {
    time: "12:05",
    date: "Aug 24, 2024",
    title: "Solar Contribution Peak",
    description:
      "Maximum solar production reached 4.8kW. Home batteries at 100% capacity.",
    tag: "info",
  },
  {
    time: "12:05",
    date: "Aug 24, 2024",
    title: "Solar Contribution Peak",
    description:
      "Maximum solar production reached 4.8kW. Home batteries at 100% capacity.",
    tag: "info",
  },
];

export default function Timeline() {
  return (
    <div className="timeline-wrapper">
      <h6 style={{ fontWeight: 600, fontSize: "20px" }}>Timeline</h6>

      <div className="timeline-container">
        {data.map((item, index) => (
          <TimelineCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
