import React from "react";

function InternetConnection({ status }) {
  return (
    <p>
      Internet Connection: <span>{status}</span>
    </p>
  );
}

export default InternetConnection;
