import { ConsumptionItem } from "./ConsumptionHierarchy";

interface Props {
  item: ConsumptionItem;
  rank: number;
}

export default function ConsumptionHierarchyBox({ item, rank }: Props) {
  const Icon = item.icon;

  const isHighest = rank === 0;
  const isSecond = rank === 1;

  return (
    <div
      className={`consumption-box ${
        isHighest ? "highest" : isSecond ? "second" : ""
      }`}
    >
      <div className="consumption-box-left">
        <div
          className={`consumption-icon ${
            isHighest ? "highest" : isSecond ? "second" : ""
          }`}
        >
          <Icon size={20} />
        </div>

        <div className="consumption-texts">
          <p className="consumption-title">{item.title}</p>
          <p className="consumption-sub">
            {item.consumption}
            {item.unit}
          </p>
        </div>
      </div>

      <div className="consumption-box-right">
        <p className="consumption-percent">{item.percent}%</p>

        <div className="consumption-bar">
          <div
            className={`consumption-bar-fill ${
              isHighest ? "highest" : isSecond ? "second" : ""
            }`}
            style={{ width: `${item.percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
