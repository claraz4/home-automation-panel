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
  invert?: boolean;
}

export default function ElementBox({
  title,
  subtitle,
  icon: Icon,
  onClick,
  hasStatus = false,
  status,
  invert = false,
}: Props) {
  return (
    <div
      className={`element-box-container${invert ? " invert-element-box-container" : ""}`}
      onClick={onClick}
    >
      {Icon && (
        <div className="element-icon-container">
          <Icon size={35} color={invert ? "var(--primary-500)" : "white"} />
        </div>
      )}

      <div className="element-info-container">
        <h6 className={`element-title${invert ? " invert-title" : ""}`}>
          {title}
        </h6>
        <p className={`element-subtitle${invert ? " invert-subtitle" : ""}`}>
          {subtitle}
        </p>
      </div>

      {hasStatus && status && (
        <div className="element-box-status-container">
          <p className={`status-text${invert ? " invert-subtitle" : ""}`}>
            {status}
          </p>
          <FaAngleRight
            size={25}
            color={invert ? "var(--gray-500)" : "rgba(255,255,255,0.7)"}
          />
        </div>
      )}
    </div>
  );
}
