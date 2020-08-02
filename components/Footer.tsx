import styles from "../styles/Home.module.css";
import { format } from "date-fns";
import * as React from "react";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      Copyright {format(new Date(), "yyyy")} Ryan Turner.{" "}
      <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
      .
    </footer>
  );
};
export default Footer;
