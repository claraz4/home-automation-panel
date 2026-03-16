export interface RoomsDTO {
  rooms: RoomDTO[];
}

export interface RoomDTO {
  roomId: string;
  name: string;
  roomType: string;
  totalPlugsCount: number;
  activePlugsCount: number;
}
