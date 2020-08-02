import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Flight } from "../../utils/types";

const getFlight: Flight = (fields: any) => {
  return {
    date: fields.date,
    aircraft: {
      make: fields.aircraftMake,
      model: fields.aircraftModel,
      ident: fields.aircraftIdent,
    },
    route: [fields.from, fields.to],
    remarks: fields.remarks,
    landings: {
      day: fields.dayLandings,
      night: fields.nightLandings,
    },
    instrumentApproaches: fields.instrumentApproaches,
    timings: {
      airplaneSel: fields.airplaneSel,
      airplaneMel: fields.airplaneMel,
      night: fields.night,
      actualInstrument: fields.actualInstrument,
      simulatedInstrument: fields.simulatedInstrument,
      simulator: fields.simulator,
      flightTraining: fields.flightTraining,
      solo: fields.solo,
      crossCountry: fields.crossCountry,
      total: fields.total,
    },
  };
};

const Add: React.FunctionComponent = () => {
  let addFlight = undefined;
  React.useEffect(() => {
    const req = indexedDB.open("lastlog");
    req.addEventListener("success", () => {
      const db = req.result;
      addFlight = (flight) => {
        const tx = db.transaction(["flights"], "readwrite");
        const employeeTable = tx.objectStore("flights");
        employeeTable.put(flight, "blahKey");
      };
    });
  }, []);
  return (
    <div>
      <h1>Add a Flight</h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
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
        onSubmit={(values, { setSubmitting }) => {
          addFlight(getFlight(values));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>
              Date
              <Field type="date" name="date" />
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
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Add;
