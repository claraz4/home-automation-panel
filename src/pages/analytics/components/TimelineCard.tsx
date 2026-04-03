import "../styles/timeline.css";
import { TimelineItem } from "../types/TimelineItem";

interface Props {
  item: TimelineItem;
}

export default function TimelineCard({ item }: Props) {
  return (
    <div className="timeline-card">
      <div className="timeline-card-header">
        <span className="timeline-time">{item.time}</span>
        <span className="timeline-date">{item.date}</span>
      </div>
      <div className="timeline-content">
        <div className="timeline-title">{item.title}</div>
        <div className="timeline-description">{item.description}</div>
      </div>
    </div>
  );
}
