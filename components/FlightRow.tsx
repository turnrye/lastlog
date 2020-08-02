import * as React from "react";
import { Flight } from "../utils/types";
import { formatISO, parseISO } from "date-fns";

interface FlightRowProps {
  flight: Flight;
}

const FlightRow: React.FunctionComponent<FlightRowProps> = (
  props: FlightRowProps
) => {
  const { flight } = props;
  return (
    <tr>
      <td>{formatISO(parseISO(flight.date || "2020-05-05"), { representation: "date" })}</td>
      <td>{flight.aircraft.make}</td>
      <td>{flight.aircraft.model}</td>
      <td className="uppercase">{flight.aircraft.ident}</td>
      <td className="uppercase">{flight.route[0]}</td>
      <td className="uppercase">{flight.route.slice(-1)[0]}</td>
      <td>{flight.remarks}</td>
      <td>{flight.landings.day}</td>
      <td>{flight.landings.night}</td>
      <td>{flight.instrumentApproaches}</td>
      <td>{flight.timings.airplaneSel}</td>
      <td>{flight.timings.airplaneMel}</td>
      <td>{flight.timings.night}</td>
      <td>{flight.timings.actualInstrument}</td>
      <td>{flight.timings.simulatedInstrument}</td>
      <td>{flight.timings.simulator}</td>
      <td>{flight.timings.flightTraining}</td>
      <td>{flight.timings.solo}</td>
      <td>{flight.timings.crossCountry}</td>
      <td>{flight.timings.total}</td>
    </tr>
  );
};
export default FlightRow;
