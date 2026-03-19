import { BasePlug } from "../../../shared/types/BasePlug";

export interface ScheduleInfoDTO {
  id: number;
  name: string;
  time: string; // ISO date string
  isActive: boolean;
  onPlugs: BasePlug[];
  offPlugs: BasePlug[];
}
