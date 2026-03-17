import "../styles/plugOverview.css";
import PlugToggler from "./PlugToggler";
import { PlugDTO } from "../../single-plug/types/PlugDTO";
import ElementBox from "../../../shared/components/element-box/ElementBox";
import { getTimeoutStr } from "../../../helpers/timeHelper";

interface Props {
  plugInfo: PlugDTO;
  togglePlugState: () => void;
}

export default function PlugOverview({ plugInfo, togglePlugState }: Props) {
  const timeoutStr = plugInfo.timeout ? getTimeoutStr(plugInfo.timeout) : "";

  return (
    <div className="plug-overview-container">
      <PlugToggler state={plugInfo.isOn} toggleState={togglePlugState} />
      <div className="plug-overview-elements-container">
        <ElementBox
          title="Auto Turn Off"
          subtitle={plugInfo.timeout ? timeoutStr : "No timeout specified"}
          hasStatus={true}
          status={plugInfo.timeout ? "ON" : "OFF"}
          invert={true}
        />
        <ElementBox
          title="Authorization Required"
          subtitle="2 Users"
          hasStatus={true}
          status="ON"
          invert={true}
        />
      </div>
    </div>
  );
}
