import { FlightInterface } from "../utils/types";
import Dexie from "dexie";

export class FlightDb extends Dexie {
  flights: Dexie.Table<FlightInterface, number>;

  constructor() {
    super("FlightInterface");
    this.version(2).stores({
      flights: "++,date",
    });
    this.flights = this.table("flights");
  }
}
