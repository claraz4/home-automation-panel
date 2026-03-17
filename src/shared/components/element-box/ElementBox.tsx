import { IconType } from "react-icons";
import "./elementBox.css";
import { FaAngleRight } from "react-icons/fa6";

interface Props {
  title: string;
  subtitle?: string;
  icon?: IconType;
  onClick?: () => void;
  hasStatus?: boolean;
  status?: string;
}

export default function ElementBox({
  title,
  subtitle,
  icon: Icon,
  onClick,
  hasStatus = false,
  status,
}: Props) {
  return (
    <div className="element-box-container" onClick={onClick}>
      {Icon && (
        <div className="element-icon-container">
          <Icon size={35} color="white" />
        </div>
      )}

      <div className="element-info-container">
        <h6 className="element-title">{title}</h6>
        <p className="element-subtitle">{subtitle}</p>
      </div>

      {hasStatus && status && (
        <div className="element-box-status-container">
          <p className="status-text">{status}</p>
          <FaAngleRight size={25} color="rgba(255,255,255,0.7)" />
        </div>
      )}
    </div>
  );
}
