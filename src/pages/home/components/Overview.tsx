import "../styles/overview.css";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import GeneralInformation from "./GeneralInformation";

export default function Overview() {
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(dayjs());
    }, 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="overview-container">
      <div className="title-container">
        <div>
          <h3 className="welcome-text">Welcome, User!</h3>
          <h6 className="day-text">{date.format("dddd, MMMM DD, YYYY")}</h6>
        </div>
        <h1 className="time-text">{date.format("HH:mm")}</h1>
      </div>
      <GeneralInformation />
    </div>
  );
}
