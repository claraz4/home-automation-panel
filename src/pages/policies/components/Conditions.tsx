import "../styles/conditions.css";
import ConditionBox from "./ConditionBox";

interface Props {
  plugs: number;
  source?: string;
  tempGreaterThan?: number | null;
  tempLessThan?: number | null;
}

export default function Conditions({
  plugs,
  source,
  tempGreaterThan,
  tempLessThan,
}: Props) {
  return (
    <div className="conditions-container">
      <ConditionBox title={`${plugs} Plug${plugs === 1 ? "" : "s"}`} />
      {source && <ConditionBox title={source} />}
      {tempGreaterThan && <ConditionBox title={`> ${tempGreaterThan} °C`} />}
      {tempLessThan && <ConditionBox title={`< ${tempLessThan} °C`} />}
    </div>
  );
}
