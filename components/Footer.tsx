import styles from "../styles/Home.module.css";
import { format } from "date-fns";
import * as React from "react";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      Copyright {format(new Date(), "yyyy")} Ryan Turner.
    </footer>
  );
};
export default Footer;
