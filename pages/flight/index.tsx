import styles from "../styles/Home.module.css";
import * as React from "react";
import FlightRow from "../../components/FlightRow";
import Link from "next/link";
import { Flight } from "../../utils/types";

const Home: React.FunctionComponent = () => {
  const [flights, setFlights] = React.useState("flights");
  React.useEffect(() => {
    const req = indexedDB.open("lastlog");
    req.addEventListener("success", () => {
      const db = req.result;

      const tx = db.transaction(["flights"], "readonly");
      const employeeTable = tx.objectStore("flights");
      employeeTable.getAll().onsuccess = function (event) {
        setFlights(event.target.result);
      };
    });
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
            flights.map((flight: Flight) => (
              <FlightRow
                flight={flight}
                key={flight.date + flight.route[0] + flight.route[-1]}
              />
            ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default Home;
