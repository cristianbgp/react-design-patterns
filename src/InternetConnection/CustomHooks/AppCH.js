import React from "react";
import useInternetConnection from "./user-internet-connection";

function AppCH() {
  const status = useInternetConnection();

  return (
    <>
      <h1>Using Custom Hooks</h1>
      <p>
        Internet Connection: <span>{status}</span>
      </p>
    </>
  );
}

export default AppCH;
