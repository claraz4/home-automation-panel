export interface SchedulesDTO {
  schedules: ScheduleDTO[];
}

export interface ScheduleDTO {
  id: number;
  name: string;
  time: Date;
  isActive: boolean;
  deviceCount: number;
}
