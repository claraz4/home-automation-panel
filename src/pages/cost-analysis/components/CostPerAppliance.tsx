import { FaPlug } from "react-icons/fa";
import ConsumptionHierarchy from "../../../shared/components/consumption-hierarchy/ConsumptionHierarchy";

export default function CostPerAppliance() {
  return (
    <ConsumptionHierarchy
      items={[
        {
          title: "Heater",
          icon: FaPlug,
          percent: 40,
          consumption: 300,
          unit: "$",
        },
        {
          title: "AC",
          icon: FaPlug,
          percent: 30,
          consumption: 210,
          unit: "$",
        },
      ]}
    />
  );
}
