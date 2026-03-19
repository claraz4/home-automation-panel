import "./styles/plugs.css";
import PageTitle from "../../shared/components/page-title/PageTitle";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { AllPlugsDTO, PlugRoomDTO } from "./types/AllPlugsDTO";
import StatsTitle from "../../shared/components/stats-title/StatsTitle";
import { FaPlug } from "react-icons/fa6";
import ElementBox from "../../shared/components/element-box/ElementBox";
import { useNavigate } from "react-router-dom";

export default function Plugs() {
  const [plugs, setPlugs] = useState<PlugRoomDTO[]>([]);
  const navigate = useNavigate();

  const getPlugs = async () => {
    try {
      const { data } = await api.get<AllPlugsDTO>("/plugs");
      setPlugs(data.plugs);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void getPlugs();
  }, []);

  return (
    <div className="navbar-page">
      <PageTitle
        title="Plugs"
        rightComponent={
          plugs ? (
            <StatsTitle
              stats={[
                { title: "Plugs", subtitle: `${plugs.length}`, icon: FaPlug },
              ]}
            />
          ) : null
        }
      />
      <div className="element-boxes-list-container">
        {plugs.length > 0 &&
          plugs.map((plug) => (
            <ElementBox
              key={plug.id}
              title={plug.name}
              icon={FaPlug}
              iconSize={30}
              subtitle={plug.room}
              onClick={() => navigate(`/plugs/${plug.id}`)}
            />
          ))}
      </div>
    </div>
  );
}
