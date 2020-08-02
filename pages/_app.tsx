import * as React from "react";
import Head from "next/head";
import "../styles/globals.css";
import Footer from "../components/Footer";

export interface AppProps {
  Component: React.ElementType;
  pageProps: React.Props<any>;
}

const MyApp: React.FunctionComponent<AppProps> = (props: AppProps) => {

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
