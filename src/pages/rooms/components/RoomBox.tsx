import { useNavigate } from "react-router-dom";
import "../styles/roomBox.css";
import { roomIcons, RoomType } from "../types/RoomType";
import { RoomDTO } from "../types/RoomsDTO";

interface RoomBoxProps {
  room: RoomDTO;
}

export default function RoomBox({ room }: RoomBoxProps) {
  const { roomId, name, roomType, activePlugsCount, totalPlugsCount } = room;
  const navigate = useNavigate();
  const normalizedType = roomType.toLowerCase() as RoomType;
  const Icon = roomIcons[normalizedType] ?? roomIcons.default;

  const handleClick = () => {
    navigate(`/rooms/${roomId}`);
  };

  return (
    <div className="room-box-container" onClick={handleClick}>
      <div className="room-icon-container">
        <Icon size={35} color="white" />
      </div>

      <div className="room-info-container">
        <h6 className="room-name">{name}</h6>
        <p className="room-devices">
          {totalPlugsCount} device{totalPlugsCount === 1 ? "" : "s"}
          &nbsp;&nbsp;•&nbsp;&nbsp;
          {activePlugsCount} active
        </p>
      </div>
    </div>
  );
}
