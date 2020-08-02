import * as React from "react";
import FlightRow from "../../components/FlightRow";
import Link from "next/link";
import { Flight, FlightInterface } from "../../utils/types";
import { FlightDb } from "../../api/data";

const Home: React.FunctionComponent = () => {
  const [flights, setFlights] = React.useState<Array<FlightInterface>>([]);
  const [totals, setTotals] = React.useState<FlightInterface>();
  React.useEffect(() => {
    const fetchData = async () => {
      const flightDb = new FlightDb();
      const doc = await flightDb.flights
        .toCollection()
        .reverse()
        .sortBy("date");
      setFlights(doc);
      setTotals(
        doc.reduce((acc, flight) => {
          acc.landings.day += flight.landings.day;
          acc.landings.night += flight.landings.night;
          acc.timings.airplaneSel += flight.timings.airplaneSel;
          return acc;
        }, new Flight())
      );
    };
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <Link href="/flight/add">
        <a>Add a Flight</a>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Make</th>
            <th>Model</th>
            <th>Ident</th>
            <th>From</th>
            <th>To</th>
            <th>Remarks</th>
            <th>Day Landings</th>
            <th>Night Landings</th>
            <th>Instrument Approaches</th>
            <th>SEL Time</th>
            <th>MEL Time</th>
            <th>Night Time</th>
            <th>Actual Instrument Time</th>
            <th>Simulated Instrument Time</th>
            <th>Simulator Time</th>
            <th>Flight Training Time</th>
            <th>Solo/PIC Time</th>
            <th>Cross Country Time</th>
            <th>Total Time</th>
          </tr>
        </thead>
        <tbody>
          {flights &&
            typeof flights == "object" &&
            flights.map((flight: FlightInterface) => (
              <FlightRow flight={flight} key={flight.date.getTime()} />
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={7}></td>
            <td>{totals?.landings?.day}</td>
            <td>{totals?.landings?.night}</td>
            <td>{totals?.instrumentApproaches}</td>
            <td>{totals?.timings.airplaneSel}</td>
            <td>{totals?.timings.airplaneMel}</td>
            <td>{totals?.timings.night}</td>
            <td>{totals?.timings.actualInstrument}</td>
            <td>{totals?.timings.simulatedInstrument}</td>
            <td>{totals?.timings.simulator}</td>
            <td>{totals?.timings.flightTraining}</td>
            <td>{totals?.timings.solo}</td>
            <td>{totals?.timings.crossCountry}</td>
            <td>{totals?.timings.total}</td>
          </tr>
        </tfoot>
      </table>
    </React.Fragment>
  );
};
export default Home;
