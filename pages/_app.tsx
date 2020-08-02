import * as React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "../styles/globals.css";
import Footer from "../components/Footer";

export interface AppProps {
  Component: React.ElementType;
  pageProps: React.Props<any>;
}

const MyApp: React.FunctionComponent<AppProps> = (props: AppProps) => {
  React.useEffect(() => {
    const req = indexedDB.open("lastlog", 1);
    req.addEventListener("upgradeneeded", (ev) => {
      const db = req.result;
      db.createObjectStore("flights");
    });
  }, []);

  const { Component, pageProps } = props;
  return (
    <div>
      <Head>
        <title>Last Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />

      <Footer />
    </div>
  );
};

export default MyApp;
