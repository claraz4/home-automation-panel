import { useNavigate } from "react-router-dom";
import { roomIcons, RoomType } from "../types/RoomType";
import { RoomDTO } from "../types/RoomsDTO";
import ElementBox from "../../../shared/components/element-box/ElementBox";

interface RoomBoxProps {
  room: RoomDTO;
}

export default function RoomBox({ room }: RoomBoxProps) {
  const { roomId, name, roomType, activePlugsCount, totalPlugsCount } = room;
  const navigate = useNavigate();
  const normalizedType = roomType.toLowerCase() as RoomType;
  const Icon = roomIcons[normalizedType] ?? roomIcons.default;
  const subtitle = `${totalPlugsCount} device${totalPlugsCount === 1 ? "" : "s"}  •  ${activePlugsCount} active`;

  const handleClick = () => {
    navigate(`/rooms/${roomId}`);
  };

  return (
    <ElementBox
      title={name}
      onClick={handleClick}
      subtitle={subtitle}
      icon={Icon}
    />
  );
}
