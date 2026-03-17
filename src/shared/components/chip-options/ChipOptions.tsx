import Chip from "./Chip";
import "./chipOptions.css";

export interface ChipOption {
  id: string;
  text: string;
}

interface Props {
  options: ChipOption[];
  selectedOption: ChipOption;
  setSelectedOption: (option: ChipOption) => void;
}

export default function ChipOptions({
  options,
  selectedOption,
  setSelectedOption,
}: Props) {
  return (
    <div className="chip-options-grid">
      {options.map((item) => (
        <div key={item.id} className="chip-options-item">
          <Chip
            id={item.id}
            text={item.text}
            isSelected={selectedOption.id === item.id}
            onPress={() => setSelectedOption(item)}
          />
        </div>
      ))}
    </div>
  );
}
