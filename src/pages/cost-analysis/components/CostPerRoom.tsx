import { FaDoorClosed } from "react-icons/fa";
import ConsumptionHierarchy from "../../../shared/components/consumption-hierarchy/ConsumptionHierarchy";

export default function CostPerRoom() {
  return (
    <ConsumptionHierarchy
      items={[
        {
          title: "Kitchen",
          icon: FaDoorClosed,
          percent: 23,
          consumption: 178,
          unit: "$",
        },
        {
          title: "Bedroom",
          icon: FaDoorClosed,
          percent: 35,
          consumption: 289,
          unit: "$",
        },
        {
          title: "Bathroom",
          icon: FaDoorClosed,
          percent: 12,
          consumption: 123,
          unit: "$",
        },
      ]}
    />
  );
}
