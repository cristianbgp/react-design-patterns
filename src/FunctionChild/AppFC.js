import React from "react";
import PageVisibility from "./PageVisibility";

function AppRP() {
  return (
    <>
      <h1>Learning different React Design Patterns</h1>
      <PageVisibility>
        {status => {
          return (
            <p>
              Page Visibility: <span>{status.toString()}</span>
            </p>
          );
        }}
      </PageVisibility>
    </>
  );
}

export default AppRP;
