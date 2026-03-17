import Stepper from "../../../shared/components/stepper/Stepper";
import "../styles/timeSelector.css";
import { Dispatch, SetStateAction } from "react";

interface Props {
  maxHourValue: number;
  minHourValue: number;
  maxMinuteValue: number;
  minMinuteValue: number;
  stepHour?: number;
  stepMinute?: number;
  selectedHour: number;
  selectedMinute: number;
  onSelectedHourChange: Dispatch<SetStateAction<number>>;
  onSelectedMinuteChange: Dispatch<SetStateAction<number>>;
  padStart?: number;
}

export default function TimeSelector({
  maxHourValue,
  minHourValue,
  maxMinuteValue,
  minMinuteValue,
  stepHour,
  stepMinute,
  selectedHour,
  selectedMinute,
  onSelectedMinuteChange,
  onSelectedHourChange,
  padStart = 1,
}: Props) {
  return (
    <div className="time-selector-container">
      <Stepper
        max={maxHourValue}
        min={minHourValue}
        step={stepHour}
        current={selectedHour}
        setCurrent={onSelectedHourChange}
        title="Hours"
        padStart={padStart}
      />

      <Stepper
        max={maxMinuteValue}
        min={minMinuteValue}
        step={stepMinute}
        current={selectedMinute}
        setCurrent={onSelectedMinuteChange}
        title="Minutes"
        padStart={padStart}
      />
    </div>
  );
}
