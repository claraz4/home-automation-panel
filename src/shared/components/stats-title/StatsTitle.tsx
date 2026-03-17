import { IconType } from "react-icons";
import "./statsTitle.css";

export interface StatsElement {
  title: string;
  subtitle: string;
  icon: IconType;
  iconSize?: number;
}

interface Props {
  stats: StatsElement[];
}

export default function StatsTitle({ stats }: Props) {
  return (
    <div className="stats-container">
      {stats.map((stats, idx) => {
        const Icon = stats.icon;

        return (
          <div key={idx} className="stats-subcontainer">
            <Icon size={stats.iconSize ?? 40} color="var(--primary-500)" />
            <div>
              <p>{stats.title}</p>
              <h6>{stats.subtitle}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}
