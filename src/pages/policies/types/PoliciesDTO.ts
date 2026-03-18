export interface PolicyDTO {
  id: number;
  name: string;
  powerSourceId: number;
  powerSourceName: string;
  tempGreaterThan: number | null;
  tempLessThan: number | null;
  numOfPlugs: number;
  isActive: boolean;
}

export interface PoliciesDTO {
  policies: PolicyDTO[];
}
