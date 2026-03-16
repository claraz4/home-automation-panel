import "./rooms.css";
import PageTitle from "../../shared/page-title/PageTitle";
import RoomsStats from "./components/RoomsStats";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { RoomDTO, RoomsDTO } from "./types/RoomsDTO";
import RoomBox from "./components/RoomBox";

export default function Rooms() {
  const [rooms, setRooms] = useState<RoomDTO[]>([]);

  const getRooms = async () => {
    try {
      const { data } = await api.get<RoomsDTO>("/rooms");
      setRooms(data.rooms);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void getRooms();
  }, []);

  return (
    <div className="rooms-page">
      <PageTitle title="Rooms" rightComponent={<RoomsStats />} />
      <div className="rooms-list-container">
        {rooms.length > 0 &&
          rooms.map((room) => <RoomBox key={room.roomId} room={room} />)}
      </div>
    </div>
  );
}
