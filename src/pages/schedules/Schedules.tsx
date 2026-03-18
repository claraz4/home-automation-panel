import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./styles/schedules.css";
import { api } from "../../api/api";
import PageTitle from "../../shared/components/page-title/PageTitle";
import AppCalendar from "./components/AppCalendar";
import SchedulesList from "../../shared/components/schedules-list/SchedulesList";
import { useNavigate } from "react-router-dom";

export default function Schedules() {
  const [currentDay, setCurrentDay] = useState(dayjs());
  const navigate = useNavigate();

  const onAdd = () => {
    navigate("/schedules/create");
  };

  return (
    <div className="schedules-page navbar-page">
      <PageTitle title="Schedules" hasAddButton={true} onAdd={onAdd} />
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
