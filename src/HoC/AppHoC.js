import React from "react";
import withPageVisibility from "./withPageVisibility";

function AppHoC({ status }) {
  return (
    <>
      <h1>Learning different React Design Patterns</h1>
      <p>
        Page Visibility: <span>{status.toString()}</span>
      </p>
    </>
  );
}

export default withPageVisibility(AppHoC);
