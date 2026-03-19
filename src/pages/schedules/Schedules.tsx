import { useState } from "react";
import dayjs from "dayjs";
import "./styles/schedules.css";
import PageTitle from "../../shared/components/page-title/PageTitle";
import AppCalendar from "./components/AppCalendar";
import SchedulesList from "../../shared/components/schedules-list/SchedulesList";
import ScheduleInfoSlider from "./components/ScheduleInfoSlider";

export default function Schedules() {
  const [currentDay, setCurrentDay] = useState(dayjs());
  const [showScheduleInfo, setShowScheduleInfo] = useState(false);
  const [clickedScheduleId, setClickedScheduleId] = useState<number | null>(
    null,
  );

  return (
    <div className="schedules-page navbar-page">
      <PageTitle title="Schedules" />
      <div className="schedules-info-container">
        <SchedulesList
          title={currentDay.format("dddd, MMMM DD")}
          date={currentDay}
          setClickedScheduleId={setClickedScheduleId}
          setShowScheduleInfo={setShowScheduleInfo}
        />
        <AppCalendar currentDay={currentDay} setCurrentDay={setCurrentDay} />
      </div>
      <ScheduleInfoSlider
        isOpen={showScheduleInfo}
        onClose={() => setShowScheduleInfo(false)}
        scheduleId={clickedScheduleId}
      />
    </div>
  );
}
