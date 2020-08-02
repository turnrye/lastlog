import * as React from "react";
import Link from "next/link";

const Home: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Link href="/flight">
        <a>Go</a>
      </Link>
    </React.Fragment>
  );
};
export default Home;
