import "./pageTitle.css";
import { ReactNode } from "react";

interface Props {
  title: string;
  rightComponent?: ReactNode;
}

export default function PageTitle({ title, rightComponent }: Props) {
  return (
    <div className="page-title-container">
      <h3>{title}</h3>
      {rightComponent}
    </div>
  );
}
