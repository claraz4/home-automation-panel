import "./sliderScreen.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  sliderClassContainer?: string;
}

export default function SliderScreen({
  children,
  isOpen,
  onClose,
  sliderClassContainer,
}: Props) {
  return (
    <div className={`slider-overlay ${isOpen ? "open" : ""}`}>
      <div className="slider-backdrop" onClick={onClose} />
      <div className="slider-panel" onClick={(e) => e.stopPropagation()}>
        <div
          className={`slider-content-container${sliderClassContainer ? ` ${sliderClassContainer}` : ""}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
