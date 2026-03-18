import "./pageTitle.css";
import { ReactNode } from "react";

interface Props {
  title: string;
  rightComponent?: ReactNode;
  subtitle?: string;
  hasAddButton?: boolean;
  onAdd?: () => void;
}

export default function PageTitle({
  title,
  rightComponent,
  subtitle,
  hasAddButton = false,
  onAdd,
}: Props) {
  return (
    <div className="page-title-container">
      <div>
        <h3>{title}</h3>
        {subtitle && <p className="subtitle-text">{subtitle}</p>}
      </div>
      {rightComponent}
      {hasAddButton && onAdd && (
        <button className="add-button" onClick={onAdd}>
          +
        </button>
      )}
    </div>
  );
}
