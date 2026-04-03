import "../styles/allCosts.css";
import React, { useState } from "react";
import SegmentedControl from "../../../shared/components/segmented-control/SegmentedControl";
import CostPerRoom from "./CostPerRoom";
import CostPerAppliance from "./CostPerAppliance";

export default function AllCosts() {
  const options = ["Rooms", "Plugs"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="all-costs-container">
      <h4>Costs</h4>

      <div className="all-costs-content">
        <SegmentedControl
          options={options}
          value={selectedOption}
          onPress={setSelectedOption}
          style={{ width: 200, height: 32, backgroundColor: "white" }}
        />

        {selectedOption === "Rooms" && <CostPerRoom />}
        {selectedOption === "Plugs" && <CostPerAppliance />}
      </div>
    </div>
  );
}
