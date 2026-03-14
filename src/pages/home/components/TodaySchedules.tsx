import { GoClock } from "react-icons/go";

export default function TodaySchedules() {
  return (
    <div className="schedules-container">
      <h5 style={{ color: "white" }}>Today's Schedules</h5>
      <div>
        <div className="schedule-container">
          <GoClock size={30} color="white" />
          <div>
            <p>Schedule Name</p>
            <p className="schedule-info">9:00 • 2 Devices</p>
          </div>
        </div>
      </div>
    </div>
  );
}
