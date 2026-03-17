import "../styles/plugOverview.css";
import PlugToggler from "./PlugToggler";
import { PlugDTO } from "../types/PlugDTO";
import ElementBox from "../../../shared/components/element-box/ElementBox";
import { getTimeoutStr } from "../../../helpers/timeHelper";
import { useState } from "react";
import TimeoutSlider from "./TimeoutSlider";

interface Props {
  plugInfo: PlugDTO;
  togglePlugState: () => void;
  getPlugInfo: () => void;
}

export default function PlugOverview({
  plugInfo,
  togglePlugState,
  getPlugInfo,
}: Props) {
  const timeoutStr = plugInfo.timeout ? getTimeoutStr(plugInfo.timeout) : "";
  const [showTimeout, setShowTimeout] = useState(false);

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
          onClick={() => setShowTimeout(true)}
        />
        <ElementBox
          title="Authorization Required"
          subtitle="2 Users"
          hasStatus={true}
          status="ON"
          invert={true}
        />
      </div>
      <TimeoutSlider
        initialTimeout={plugInfo.timeout}
        isOpen={showTimeout}
        onClose={() => setShowTimeout(false)}
        onConfirm={getPlugInfo}
      />
    </div>
  );
}
