import { useParams } from "react-router";
import PageTitle from "../../shared/components/page-title/PageTitle";
import { useEffect, useState } from "react";
import { SingleRoomDTO } from "./types/SingleRoomDTO";
import { api } from "../../api/api";
import SingleRoomStats from "./components/SingleRoomStats";
import { RoomPlug, RoomPlugsDTO } from "../rooms/types/RoomPlugsDTO";
import ElementBox from "../../shared/components/element-box/ElementBox";
import { FaPlug } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./styles/singleRoom.css";

export default function SingleRoom() {
  const { roomId } = useParams();
  const [roomInfo, setRoomInfo] = useState<SingleRoomDTO | null>(null);
  const [roomPlugs, setRoomPlugs] = useState<RoomPlug[]>([]);
  const navigate = useNavigate();

  const getRoomInfo = async () => {
    try {
      const { data } = await api.get<SingleRoomDTO>(`rooms/${roomId}`);
      setRoomInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getRoomPlugs = async () => {
    try {
      const { data } = await api.get<RoomPlugsDTO>(`rooms/${roomId}/plugs`);
      setRoomPlugs(data.plugs);
    } catch (error) {
      console.error(error);
    }
  };

  // TODO: Implement this when api is done
  useEffect(() => {
    void getRoomPlugs();
    // void getRoomInfo();
    setRoomInfo({
      roomId: Number(roomId) ?? 1,
      name: "Room 1",
      totalPlugsCount: 3,
      activePlugsCount: 2,
      roomType: "kitchen",
    });
  }, []);

  const handleClick = (plugId: number) => {
    navigate(`/plugs/${plugId}`);
  };

  if (!roomInfo) return <p>Loading</p>;

  return (
    <div className="navbar-page">
      {roomPlugs && (
        <PageTitle
          title={roomInfo.name}
          rightComponent={<SingleRoomStats totalPlugs={roomPlugs.length} />}
        />
      )}
      <div className="element-boxes-list-container">
        {roomPlugs.length !== 0 &&
          roomPlugs.map((plug) => (
            <ElementBox
              key={plug.id}
              title={plug.name}
              icon={FaPlug}
              onClick={() => handleClick(plug.id)}
              subtitle={plug.isConstant ? "Constant" : ""}
              hasStatus={true}
              status={plug.isOn ? "ON" : "OFF"}
            />
          ))}
      </div>
    </div>
  );
}
