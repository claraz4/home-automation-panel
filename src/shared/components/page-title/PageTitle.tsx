import "./pageTitle.css";
import { ReactNode } from "react";

interface Props {
  title: string;
  rightComponent?: ReactNode;
  subtitle?: string;
}

export default function PageTitle({ title, rightComponent, subtitle }: Props) {
  return (
    <div className="page-title-container">
      <div>
        <h3>{title}</h3>
        {subtitle && <p className="subtitle-text">{subtitle}</p>}
      </div>
      {rightComponent}
    </div>
  );
}
