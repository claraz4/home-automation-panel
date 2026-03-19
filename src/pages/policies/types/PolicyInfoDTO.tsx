import { BasePlug } from "../../../shared/types/BasePlug";

export interface PolicyInfoDTO {
  id: number;
  name: string;
  powerSourceId: number;
  powerSourceName: string;
  tempGreaterThan: number | null;
  tempLessThan: number | null;
  numOfPlugs: number;
  isActive: boolean;
  onPlugs: BasePlug[];
  offPlugs: BasePlug[];
}
