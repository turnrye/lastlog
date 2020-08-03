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
export class Flight implements FlightInterface {
  date = new Date();
  aircraft = { make: "", model: "", ident: "" };
  route: Array<string> = [];
  remarks = "";
  landings = { day: 0, night: 0 };
  instrumentApproaches = 0;
  timings = {
    airplaneSel: 0,
    airplaneMel: 0,
    night: 0,
    actualInstrument: 0,
    simulatedInstrument: 0,
    simulator: 0,
    flightTraining: 0,
    solo: 0,
    crossCountry: 0,
    total: 0,
  };
  id = 0;
}

export interface FlightInterface {
  date: Date;
  aircraft: Aircraft;
  route: Array<string>;
  remarks: string;
  landings: Landings;
  instrumentApproaches: number;
  timings: Timings;
  id: number;
}
