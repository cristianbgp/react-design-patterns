import React from "react";
import PageVisibility from "./PageVisibility";

function AppRP() {
  return (
    <>
      <h1>Using Render Props</h1>
      <PageVisibility
        render={status => {
          return (
            <p>
              Page Visibility: <span>{status.toString()}</span>
            </p>
          );
        }}
      />
    </>
  );
}

export default AppRP;
