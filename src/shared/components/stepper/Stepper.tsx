import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./stepper.css";

interface Props {
  max: number;
  min: number;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
  step?: number;
  title?: string;
  padStart?: number;
  hasDisabled?: boolean;
}

export default function Stepper({
  max,
  min,
  step = 1,
  current,
  setCurrent,
  title,
  padStart = 1,
  hasDisabled = false,
}: Props) {
  const [isAddDisabled, setIsAddDisabled] = useState(false);
  const [isMinusDisabled, setIsMinusDisabled] = useState(false);

  useEffect(() => {
    if (hasDisabled) {
      setIsMinusDisabled(current - step < min);
      setIsAddDisabled(current + step > max);
    }
  }, [current]);

  const increaseCurrent = () => {
    if (hasDisabled && current + step <= max) {
      setCurrent((prevState) => prevState + step);
    }

    if (!hasDisabled) {
      setCurrent((prevState) => (prevState + step) % max);
    }
  };

  const decreaseCurrent = () => {
    if (hasDisabled && current - step >= min) {
      setCurrent((prevState) => prevState - step);
    }

    if (!hasDisabled) {
      setCurrent((prevState) => {
        if (prevState - step < 0) {
          return Math.floor(max / step) * step;
        }
        return prevState - step;
      });
    }
  };

  return (
    <div className="stepper-full-container">
      <div className="stepper-container">
        <button
          disabled={isAddDisabled}
          onClick={increaseCurrent}
          className={`stepper-control ${
            isAddDisabled ? "stepper-disabled-control" : ""
          }`}
        >
          <p
            className={`stepper-control-text ${
              isAddDisabled ? "stepper-disabled-text" : ""
            }`}
          >
            +
          </p>
        </button>

        <p className="stepper-value">
          {String(current).padStart(padStart, "0")}
        </p>

        <button
          disabled={isMinusDisabled}
          onClick={decreaseCurrent}
          className={`stepper-control ${
            isMinusDisabled ? "stepper-disabled-control" : ""
          }`}
        >
          <p
            className={`stepper-control-text ${
              isMinusDisabled ? "stepper-disabled-text" : ""
            }`}
          >
            -
          </p>
        </button>
      </div>

      {title && <p className="stepper-title">{title}</p>}
    </div>
  );
}
