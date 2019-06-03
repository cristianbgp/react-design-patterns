import React from "react";

function PageVisibility({ status }) {
  return (
    <p>
      Page Visibility: <span>{status.toString()}</span>
    </p>
  );
}

export default PageVisibility;
