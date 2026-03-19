import "./status.css";

interface Props {
  status: boolean;
  statusSuccess?: string;
  statusFailure?: string;
}

export default function Status({
  status,
  statusSuccess = "Active",
  statusFailure = "Not Active",
}: Props) {
  return (
    <p
      className="state-text"
      style={{
        backgroundColor: status ? "var(--success)" : "var(--fail)",
      }}
    >
      {status ? statusSuccess : statusFailure}
    </p>
  );
}
