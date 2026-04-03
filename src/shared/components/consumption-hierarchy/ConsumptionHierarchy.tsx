import "./consumptionHierarchy.css";
import ConsumptionHierarchyBox from "./ConsumptionHierarchyBox";
import { IconType } from "react-icons";

export interface ConsumptionItem {
  title: string;
  icon: IconType;
  percent: number;
  consumption: number;
  unit: string;
}

interface Props {
  items: ConsumptionItem[];
}

export default function ConsumptionHierarchy({ items }: Props) {
  const sortedItems = [...items].sort((a, b) => b.consumption - a.consumption);

  return (
    <div className="consumption-hierarchy">
      {sortedItems.map((item, index) => (
        <ConsumptionHierarchyBox key={index} item={item} rank={index} />
      ))}
    </div>
  );
}
