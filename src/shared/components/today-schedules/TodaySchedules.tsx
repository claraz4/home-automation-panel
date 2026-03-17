import { GoClock } from "react-icons/go";
import { api } from "../../../api/api";
import {
  ScheduleDTO,
  SchedulesDTO,
} from "../../../pages/home/types/SchedulesDTO";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./todaySchedules.css";
import arrayToParams from "../../../helpers/arrayToParams";

interface Props {
  containerStyleClass?: string;
  plugIds?: number[];
}

export default function TodaySchedules({
  containerStyleClass,
  plugIds,
}: Props) {
  const [todaySchedules, setTodaySchedules] = useState<ScheduleDTO[]>([]);

  const fetchTodaySchedules = async () => {
    try {
      const params = arrayToParams("PlugIds", plugIds);
      params.append("date", dayjs().format("YYYY-MM-DD"));

      const { data } = await api.get<SchedulesDTO>("/schedules/day", {
        params,
      });
      setTodaySchedules(data.schedules);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void fetchTodaySchedules();
  }, []);

  return (
    <div
      className={`schedules-container${containerStyleClass ? ` ${containerStyleClass}` : ""}`}
    >
      <h5 style={{ color: "white" }}>Today's Schedules</h5>
      <div className="all-schedules">
        {todaySchedules.map((schedule) => (
          <div className="schedule-container" key={schedule.id}>
            <GoClock size={30} color="white" />
            <div>
              <p>{schedule.name}</p>
              <p className="schedule-info">
                {dayjs(schedule.time).format("HH:mm")} • {schedule.deviceCount}{" "}
                Device{schedule.deviceCount === 1 ? "" : "s"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
