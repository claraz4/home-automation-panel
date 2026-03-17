import "./sliderScreen.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function SliderScreen({ children, isOpen, onClose }: Props) {
  return (
    <div className={`slider-overlay ${isOpen ? "open" : ""}`}>
      <div className="slider-backdrop" onClick={onClose} />
      <div className="slider-panel" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
