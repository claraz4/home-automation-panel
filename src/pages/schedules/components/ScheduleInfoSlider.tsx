import SliderScreen from "../../../shared/components/slider-screen/SliderScreen";
import "../styles/scheduleInfoSlider.css";
import { useEffect, useState } from "react";
import { ScheduleInfoDTO } from "../types/ScheduleInfoDTO";
import { api } from "../../../api/api";
import PageTitle from "../../../shared/components/page-title/PageTitle";
import LabelValueElement from "../../../shared/components/label-value-element/LabelValueElement";
import { GoClock } from "react-icons/go";
import dayjs from "dayjs";
import PlugsList from "../../../shared/components/plugs-list/PlugsList";
import Status from "../../../shared/components/status/Status";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  scheduleId: number | null;
}

export default function ScheduleInfoSlider({
  isOpen,
  onClose,
  scheduleId,
}: Props) {
  const [schedule, setSchedule] = useState<ScheduleInfoDTO | null>(null);

  const getScheduleInfo = async () => {
    try {
      const { data } = await api.get<ScheduleInfoDTO>(
        `/schedules/${scheduleId}`,
      );
      setSchedule(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (scheduleId) {
      void getScheduleInfo();
    }
  }, [scheduleId]);

  if (!schedule)
    return (
      <SliderScreen isOpen={isOpen} onClose={onClose}>
        <p>Loading</p>
      </SliderScreen>
    );

  return (
    <SliderScreen
      isOpen={isOpen}
      onClose={onClose}
      sliderClassContainer="schedule-info-container"
    >
      <PageTitle
        title="Details"
        rightComponent={<Status status={schedule.isActive} />}
      />
      <div className="schedule-info-subcontainer">
        <LabelValueElement
          label="Name"
          value={schedule.name}
          status={schedule.isActive}
        />
        <div className="schedule-time-container">
          <GoClock color="var(--primary-500)" size={30} />
          <p>{dayjs(schedule.time).format("ddd, MMM DD • HH:mm")}</p>
        </div>
        <hr />
      </div>
      <PlugsList plugs={schedule.onPlugs} plugState="ON" />
      <PlugsList plugs={schedule.offPlugs} plugState="OFF" />
    </SliderScreen>
  );
}
