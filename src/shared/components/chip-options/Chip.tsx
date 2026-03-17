import { ChipOption } from "./ChipOptions";
import "./chipOptions.css";

interface ChipProps {
  id: string;
  text: string;
  isSelected: boolean;
  onPress: (item: ChipOption) => void;
}

export default function Chip({ id, text, isSelected, onPress }: ChipProps) {
  return (
    <button
      className={`chip-container ${isSelected ? "chip-options-selected" : ""}`}
      onClick={() => onPress({ id, text })}
    >
      <h6
        className={
          isSelected ? "chip-options-text-selected" : "chip-options-text"
        }
      >
        {text}
      </h6>
    </button>
  );
}
