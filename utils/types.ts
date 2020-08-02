export interface Aircraft {
  make: string;
  model: string;
  ident: string;
}
export interface Landings {
  day: number;
  night: number;
}
export interface Timings {
  airplaneSel: number;
  airplaneMel: number;
  night: number;
  actualInstrument: number;
  simulatedInstrument: number;
  simulator: number;
  flightTraining: number;
  solo: number;
  crossCountry: number;
  total: number;
}
export interface Flight {
  date: Date;
  aircraft: Aircraft;
  route: Array<string>;
  remarks: string;
  landings: Landings;
  instrumentApproaches: number;
  timings: Timings;
}
