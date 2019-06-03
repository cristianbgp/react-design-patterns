import React from "react";
import withPageVisibility from "./withPageVisibility";

function AppHoC({ status }) {
  return (
    <>
      <h1>Using High order Components</h1>
      <p>
        Page Visibility: <span>{status.toString()}</span>
      </p>
    </>
  );
}

export default withPageVisibility(AppHoC);
