import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getTimeout,
  HHMMSSToHoursMinutes,
  minutesToHHMMSS,
} from "../../../helpers/timeHelper";
import "../styles/timeoutSlider.css";
import { api } from "../../../api/api";
import ChipOptions, {
  ChipOption,
} from "../../../shared/components/chip-options/ChipOptions";
import TimeSelector from "./TimeSelector";
import SliderScreen from "../../../shared/components/slider-screen/SliderScreen";

const TIMEOUT_OPTIONS = [15, 30, 45, 60, 90, 120, 150, 180];

interface Prop {
  initialTimeout: string | null;
  onConfirm?: () => void;
  isOpen: boolean;
  onClose?: () => void;
}

export default function TimeoutSlider({
  initialTimeout,
  onConfirm,
  isOpen,
  onClose = () => {},
}: Prop) {
  const timeoutOptions = useMemo<ChipOption[]>(
    () => [
      ...TIMEOUT_OPTIONS.map(getTimeout),
      { id: "custom", text: "Custom" },
    ],
    [],
  );

  const [selectedOption, setSelectedOption] = useState(timeoutOptions[0]);
  const isCustomSelected = selectedOption.id === "custom";
  const [selectedCustomHour, setSelectedCustomHour] = useState(0);
  const [selectedCustomMinute, setSelectedCustomMinute] = useState(0);

  const initialTotalMinutes: number | null = useMemo(() => {
    if (!initialTimeout) return null;

    const { hours, minutes } = HHMMSSToHoursMinutes(initialTimeout);
    return hours * 60 + minutes;
  }, [initialTimeout]);

  const { plugId } = useParams<{ plugId: string }>();

  useEffect(() => {
    if (initialTimeout && initialTotalMinutes) {
      if (TIMEOUT_OPTIONS.includes(initialTotalMinutes)) {
        setSelectedOption({
          id: String(initialTotalMinutes),
          text: String(getTimeout(initialTotalMinutes)),
        });
      } else {
        const { hours, minutes } = HHMMSSToHoursMinutes(initialTimeout);
        setSelectedOption({ id: "custom", text: "Custom" });
        setSelectedCustomHour(hours);
        setSelectedCustomMinute(minutes);
      }
    }
  }, [initialTimeout]);

  const handleSelectedOption = (item: ChipOption) => {
    setSelectedOption(item);

    if (item.id === "custom") {
      if (initialTimeout) {
        const { hours, minutes } = HHMMSSToHoursMinutes(initialTimeout);
        setSelectedCustomHour(hours);
        setSelectedCustomMinute(minutes);
      } else {
        setSelectedCustomHour(0);
        setSelectedCustomMinute(0);
      }
    }
  };

  const sendTimeout = async () => {
    try {
      const totalMinutes = isCustomSelected
        ? selectedCustomHour * 60 + selectedCustomMinute
        : Number(selectedOption.id);

      if (totalMinutes <= 0) return;

      const timeout = minutesToHHMMSS(totalMinutes);

      await api.post("plugs/timeout", { plugId, timeout });
      if (onConfirm) onConfirm();
    } catch (error) {
      console.error(error);
    }
  };

  const currentTotalMinutes = isCustomSelected
    ? selectedCustomHour * 60 + selectedCustomMinute
    : Number(selectedOption.id);

  const isUnchanged =
    initialTotalMinutes !== null && initialTotalMinutes === currentTotalMinutes;

  return (
    <SliderScreen isOpen={isOpen} onClose={onClose}>
      <div className="timeout-options-container">
        <div className="timeout-options-section">
          <div className="timeout-options-title">
            <h3>Timeout</h3>
            <button
              onClick={sendTimeout}
              className="timeout-options-button"
              disabled={isUnchanged}
            >
              Confirm
            </button>
          </div>

          <ChipOptions
            options={timeoutOptions}
            selectedOption={selectedOption}
            setSelectedOption={handleSelectedOption}
          />
        </div>
        {isCustomSelected && (
          <TimeSelector
            maxHourValue={12}
            minHourValue={0}
            maxMinuteValue={59}
            minMinuteValue={0}
            stepHour={1}
            stepMinute={5}
            selectedHour={selectedCustomHour}
            selectedMinute={selectedCustomMinute}
            onSelectedHourChange={setSelectedCustomHour}
            onSelectedMinuteChange={setSelectedCustomMinute}
            padStart={1}
          />
        )}
      </div>
    </SliderScreen>
  );
}
