import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { api } from "../../../api/api";
import { isDayScheduled } from "../../../helpers/timeHelper";

interface Props {
  currentDay: Dayjs;
  setCurrentDay: (day: Dayjs) => void;
}

export default function AppCalendar({ currentDay, setCurrentDay }: Props) {
  const [scheduledDays, setScheduledDays] = useState<string[]>([]);

  const getScheduledDays = async () => {
    try {
      const { data } = await api.get<{ scheduledDates: string[] }>(
        "/schedules",
      );
      setScheduledDays(data.scheduledDates);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void getScheduledDays();
  }, []);

  return (
    <Calendar
      className="calendar-container"
      minDate={new Date()}
      tileClassName={({ date }) => {
        if (isDayScheduled(dayjs(date), scheduledDays)) {
          return ["tile-container", "tile-container-scheduled"];
        }

        return "tile-container";
      }}
      prev2Label={null}
      next2Label={null}
      onChange={(value) => {
        if (value instanceof Date) {
          setCurrentDay(dayjs(value));
        }
      }}
      value={currentDay.toDate()}
    />
  );
}
