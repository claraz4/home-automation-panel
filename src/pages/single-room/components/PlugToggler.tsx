import { FaPowerOff } from "react-icons/fa6";
import "../styles/plugOverview.css";

interface Props {
  state: boolean;
  toggleState: () => void;
}

export default function PlugToggler({ state, toggleState }: Props) {
  return (
    <button className="plug-toggler-container" onClick={toggleState}>
      <FaPowerOff
        size={110}
        color={state ? "var(--primary-500)" : "var(--gray-300)"}
      />
    </button>
  );
}
