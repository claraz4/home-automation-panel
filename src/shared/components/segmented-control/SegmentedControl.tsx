import "./segmentedControl.css";

interface Props {
  options: string[];
  value: string;
  onPress: (value: string) => void;
  style?: React.CSSProperties;
}

export default function SegmentedControl({
  options,
  value,
  onPress,
  style,
}: Props) {
  return (
    <div className="segmented-control-container" style={style}>
      {options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => onPress(option)}
          className={`segmented-control-option ${
            value === option ? "selected" : ""
          }`}
          style={{ width: `${100 / options.length}%` }}
        >
          <p
            className={
              value === option
                ? "segmented-control-text-selected"
                : "segmented-control-text"
            }
          >
            {option}
          </p>
        </button>
      ))}
    </div>
  );
}
