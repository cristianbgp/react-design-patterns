import React from "react";
import usePageVisibility from "./use-page-visibility";

function AppCH() {
  const status = usePageVisibility();

  return (
    <p>
      Page Visibility: <span>{status.toString()}</span>
    </p>
  );
}

export default AppCH;
