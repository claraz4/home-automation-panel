import { BasePlug } from "../../../shared/types/BasePlug";

export interface AllPlugsDTO {
  plugs: PlugRoomDTO[];
}

export interface PlugRoomDTO extends BasePlug {
  room: string;
}
