import React from "react";
import InternetConnection from "./InternetConnection";

function AppRP() {
  return (
    <>
      <h1>Using Render Props</h1>
      <InternetConnection
        render={status => {
          return (
            <p>
              Internet Connection: <span>{status}</span>
            </p>
          );
        }}
      />
    </>
  );
}

export default AppRP;
