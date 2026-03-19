import { GoClock } from "react-icons/go";
import { api } from "../../../api/api";
import {
  ScheduleDTO,
  SchedulesDTO,
} from "../../../pages/home/types/SchedulesDTO";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import "./schedulesList.css";
import arrayToParams from "../../../helpers/arrayToParams";

interface Props {
  containerStyleClass?: string;
  plugIds?: number[];
  title?: string;
  date?: Dayjs;
  setClickedScheduleId: (id: number) => void;
  setShowScheduleInfo: (show: boolean) => void;
}

export default function SchedulesList({
  containerStyleClass,
  plugIds,
  title = "Today Schedules",
  date = dayjs(),
  setClickedScheduleId,
  setShowScheduleInfo,
}: Props) {
  const [schedules, setSchedules] = useState<ScheduleDTO[]>([]);

  const fetchSchedules = async () => {
    try {
      const params = arrayToParams("PlugIds", plugIds);
      params.append("date", date.format("YYYY-MM-DD"));

      const { data } = await api.get<SchedulesDTO>("/schedules/day", {
        params,
      });
      setSchedules(data.schedules);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void fetchSchedules();
  }, [date]);

  const handleClick = (id: number) => {
    setClickedScheduleId(id);
    setShowScheduleInfo(true);
  };

  return (
    <div
      className={`schedules-container${containerStyleClass ? ` ${containerStyleClass}` : ""}`}
    >
      <h5 style={{ color: "white" }}>{title}</h5>
      <div className="all-schedules">
        {schedules.map((schedule) => (
          <button
            className="schedule-container"
            key={schedule.id}
            onClick={() => handleClick(schedule.id)}
          >
            <GoClock size={30} color="white" />
            <div>
              <p>{schedule.name}</p>
              <p className="schedule-info">
                {dayjs(schedule.time).format("HH:mm")} • {schedule.deviceCount}{" "}
                Device{schedule.deviceCount === 1 ? "" : "s"}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
