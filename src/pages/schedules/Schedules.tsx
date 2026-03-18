import { useState } from "react";
import dayjs from "dayjs";
import "./styles/schedules.css";
import PageTitle from "../../shared/components/page-title/PageTitle";
import AppCalendar from "./components/AppCalendar";
import SchedulesList from "../../shared/components/schedules-list/SchedulesList";

export default function Schedules() {
  const [currentDay, setCurrentDay] = useState(dayjs());

  return (
    <div className="schedules-page navbar-page">
      <PageTitle title="Schedules" />
      <div className="schedules-info-container">
        <SchedulesList
          title={currentDay.format("dddd, MMMM DD")}
          date={currentDay}
        />
        <AppCalendar currentDay={currentDay} setCurrentDay={setCurrentDay} />
      </div>
    </div>
  );
}
