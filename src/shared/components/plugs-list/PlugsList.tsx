import "./plugsList.css";
import { BasePlug } from "../../types/BasePlug";
import ElementBox from "../element-box/ElementBox";
import { FaPlug } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

type PlugState = "ON" | "OFF";

interface Props {
  plugs: BasePlug[];
  plugState: PlugState;
}

export default function PlugsList({ plugs, plugState }: Props) {
  const navigate = useNavigate();

  return (
    <div className="plugs-list-container">
      <p className="plugs-list-title">Plugs to Turn {plugState}</p>
      {plugs.length !== 0 ? (
        <div className="plugs-list-subcontainer">
          {plugs.map((plug) => (
            <ElementBox
              title={plug.name}
              hasStatus={true}
              status={plug.isOn ? "ON" : "OFF"}
              invert={true}
              icon={FaPlug}
              containerClass="plug-element-box-container"
              iconSize={30}
              iconContainerClass="plug-element-icon-container"
              onClick={() => navigate(`/plugs/${plug.id}`)}
            />
          ))}
        </div>
      ) : (
        <p className="no-plugs-list-text">
          No plugs will be turning {plugState.toLowerCase()}.
        </p>
      )}
    </div>
  );
}
