import React from "react";
import withInternetConnection from "./withInternetConnection";

function AppHoC({ status }) {
  return (
    <>
      <h1>Using High order Components</h1>
      <p>
        Internet Connection: <span>{status}</span>
      </p>
    </>
  );
}

export default withInternetConnection(AppHoC);
