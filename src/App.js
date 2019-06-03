import React from "react";
import PageVisibility from "./PageVisibility";

function App() {
  return (
    <>
      <h1>Learning different React Design Patterns</h1>
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

export default App;
