export interface RoomPlugsDTO {
  plugs: RoomPlug[];
}

export interface RoomPlug {
  id: number;
  name: string;
  isOn: boolean;
  isConstant: boolean;
}
