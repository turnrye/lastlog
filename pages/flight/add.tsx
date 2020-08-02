import * as React from "react";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import { Flight } from "../../utils/types";
import { parseISO, formatISO } from "date-fns";
import { FlightDb } from "../../api/data";
import { useRouter } from "next/router";

interface AddFormFields {
  date: string;
  aircraftMake: string;
  aircraftModel: string;
  aircraftIdent: string;
  to: string;
  from: string;
  remarks: string;
  dayLandings: string;
  nightLandings: string;
  instrumentApproaches: string;
  airplaneSel: string;
  airplaneMel: string;
  night: string;
  actualInstrument: string;
  simulatedInstrument: string;
  simulator: string;
  flightTraining: string;
  solo: string;
  crossCountry: string;
  total: string;
}

const getFlight = (fields: AddFormFields): Flight => {
  const flight = new Flight();
  flight.date = parseISO(fields.date);
  flight.aircraft.make = fields.aircraftMake;
  flight.aircraft.model = fields.aircraftModel;
  flight.aircraft.ident = fields.aircraftIdent;
  flight.route = [fields.from, fields.to];
  flight.remarks = fields.remarks;
  flight.landings.day = parseInt(fields.dayLandings, 10) || 0;
  flight.landings.night = parseInt(fields.nightLandings, 10) || 0;
  flight.instrumentApproaches = parseInt(fields.instrumentApproaches, 10) || 0;
  flight.timings.airplaneSel = parseFloat(fields.airplaneSel) || 0.0;
  flight.timings.airplaneMel = parseFloat(fields.airplaneMel) || 0.0;
  flight.timings.night = parseFloat(fields.night) || 0.0;
  flight.timings.actualInstrument = parseFloat(fields.actualInstrument) || 0.0;
  flight.timings.simulatedInstrument =
    parseFloat(fields.simulatedInstrument) || 0.0;
  flight.timings.simulator = parseFloat(fields.simulator) || 0.0;
  flight.timings.flightTraining = parseFloat(fields.flightTraining) || 0.0;
  flight.timings.solo = parseFloat(fields.solo) || 0.0;
  flight.timings.crossCountry = parseFloat(fields.crossCountry) || 0.0;
  flight.timings.total = parseFloat(fields.total) || 0.0;
  return flight;
};

const Add: React.FunctionComponent = () => {
  const router = useRouter();
  const addFlight = async (flight: Flight) => {
    const db = new FlightDb();
    await db.flights.add(flight);
    router.push("/flight");
  };
  return (
    <div>
      <h1>Add a Flight</h1>

      <Formik
        initialValues={{
          date: formatISO(new Date(), {
            representation: "date",
          }),
          aircraftMake: "",
          aircraftModel: "",
          aircraftIdent: "",
          from: "",
          to: "",
          remarks: "",
          dayLandings: "",
          nightLandings: "",
          instrumentApproaches: "",
          airplaneMel: "",
          airplaneSel: "",
          night: "",
          actualInstrument: "",
          simulatedInstrument: "",
          simulator: "",
          flightTraining: "",
          solo: "",
          crossCountry: "",
          total: "",
        }}
        validate={(values: AddFormFields) => {
          const errors = {};

          //   if (!values.email) {
          //     errors.email = "Required";
          //   } else if (
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ) {
          //     errors.email = "Invalid email address";
          //   }

          return errors;
        }}
        onSubmit={(values: AddFormFields) => {
          addFlight(getFlight(values));
        }}
        render={(formikBag: FormikProps<AddFormFields>) => (
          <Form>
            <label>
              Date
              <Field
                type="date"
                name="date"
                max={formatISO(new Date(), {
                  representation: "date",
                })}
              />
            </label>
            <ErrorMessage name="date" component="div" />
            <label>
              Aircraft Make
              <Field type="text" name="aircraftMake" />
            </label>
            <ErrorMessage name="aircraftMake" component="div" />
            <label>
              Aircraft Model
              <Field type="text" name="aircraftModel" />
            </label>
            <ErrorMessage name="aircraftModel" component="div" />
            <label>
              Aircraft Ident
              <Field type="text" name="aircraftIdent" className="uppercase" />
            </label>
            <ErrorMessage name="aircraftIdent" component="div" />
            <label>
              From
              <Field type="text" name="from" className="uppercase" />
            </label>
            <ErrorMessage name="from" component="div" />
            <label>
              To
              <Field type="text" name="to" className="uppercase" />
            </label>
            <ErrorMessage name="to" component="div" />
            <label>
              Remarks
              <Field type="text" name="remarks" />
            </label>
            <ErrorMessage name="remarks" component="div" />
            <label>
              Daytime Landings
              <Field type="number" min="0" step="1" name="dayLandings" />
            </label>
            <ErrorMessage name="dayLandings" component="div" />
            <label>
              Nighttime Landings
              <Field type="number" min="0" step="1" name="nightLandings" />
            </label>
            <ErrorMessage name="nightLandings" component="div" />
            <label>
              Instrument Approaches
              <Field
                type="number"
                min="0"
                step="1"
                name="instrumentApproaches"
              />
            </label>
            <ErrorMessage name="instrumentApproaches" component="div" />
            <label>
              Airplane SEL
              <Field type="number" min="0" step="0.1" name="airplaneSel" />
            </label>
            <ErrorMessage name="airplaneSel" component="div" />
            <label>
              Airplane MEL
              <Field type="number" min="0" step="0.1" name="airplaneMel" />
            </label>
            <ErrorMessage name="airplaneMel" component="div" />
            <label>
              Night
              <Field type="number" min="0" step="0.1" name="night" />
            </label>
            <ErrorMessage name="night" component="div" />
            <label>
              Actual Instrument
              <Field type="number" min="0" step="0.1" name="actualInstrument" />
            </label>
            <ErrorMessage name="actualInstrument" component="div" />
            <label>
              Simulated Instrument
              <Field
                type="number"
                min="0"
                step="0.1"
                name="simulatedInstrument"
              />
            </label>
            <ErrorMessage name="simulatedInstrument" component="div" />
            <label>
              Simulator
              <Field type="number" min="0" step="0.1" name="simulator" />
            </label>
            <ErrorMessage name="simulator" component="div" />
            <label>
              Flight Training
              <Field type="number" min="0" step="0.1" name="flightTraining" />
            </label>
            <ErrorMessage name="flightTraining" component="div" />
            <label>
              Solo
              <Field type="number" min="0" step="0.1" name="solo" />
            </label>
            <ErrorMessage name="solo" component="div" />
            <label>
              Cross Country
              <Field type="number" min="0" step="0.1" name="crossCountry" />
            </label>
            <ErrorMessage name="crossCountry" component="div" />
            <label>
              Total
              <Field type="number" min="0" step="0.1" name="total" />
            </label>
            <ErrorMessage name="total" component="div" />
            <button type="submit">Submit</button>
          </Form>
        )}
      />
    </div>
  );
};
export default Add;
