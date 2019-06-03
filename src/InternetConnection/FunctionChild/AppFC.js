import React from "react";
import InternetConnection from "./InternetConnection";

function AppFC() {
  return (
    <>
      <h1>Using Function as children</h1>
      <InternetConnection>
        {status => {
          return (
            <p>
              Internet Connection: <span>{status}</span>
            </p>
          );
        }}
      </InternetConnection>
    </>
  );
}

export default AppFC;
