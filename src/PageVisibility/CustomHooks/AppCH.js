import React from "react";
import usePageVisibility from "./use-page-visibility";

function AppCH() {
  const status = usePageVisibility();

  return (
    <>
      <h1>Using Custom Hooks</h1>
      <p>
        Page Visibility: <span>{status.toString()}</span>
      </p>
    </>
  );
}

export default AppCH;
