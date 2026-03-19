import "./labelValueElement.css";
import Status from "../status/Status";

interface Props {
  label: string;
  value: string;
  hasStatus?: boolean;
  status?: boolean;
  statusSuccess?: string;
  statusFailure?: string;
}

export default function LabelValueElement({
  label,
  value,
  hasStatus = false,
  status = true,
  statusSuccess = "Active",
  statusFailure = "Not Active",
}: Props) {
  return (
    <div className="name-status-container">
      <p className="name-text">
        <span className="label-text">{label}:&nbsp;&nbsp;</span>
        {value}
      </p>
      {hasStatus && (
        <Status
          status={status}
          statusFailure={statusFailure}
          statusSuccess={statusSuccess}
        />
      )}
    </div>
  );
}
