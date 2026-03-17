export function HHMMSSToHoursMinutes(time: string): {
  hours: number;
  minutes: number;
} {
  const hhmmssArray = time.split(":");
  return { hours: Number(hhmmssArray[0]), minutes: Number(hhmmssArray[1]) };
}

export function getTimeoutStr(timeout: string): string {
  const { hours, minutes } = HHMMSSToHoursMinutes(timeout);
  const hoursStr = hours !== 0 ? ` ${hours} hour${hours === 1 ? "" : "s"}` : "";
  const minutesStr =
    minutes !== 0 ? ` ${minutes} minute${minutes === 1 ? "" : "s"}` : "";
  return `After${hoursStr}${minutesStr}`;
}
