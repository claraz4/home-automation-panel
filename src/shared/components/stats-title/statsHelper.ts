import { StatsElement } from "./StatsTitle";

export function isStatFound(title: string, stats: StatsElement[]): boolean {
  return stats.some((stat) => stat.title === title);
}
