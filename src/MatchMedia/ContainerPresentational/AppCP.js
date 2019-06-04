import React from "react";
import MatchMedia from "./containers/MatchMedia";

function App() {
  return (
    <div css={{ position: "fixed" }}>
      <h1>Using Container and Presentational</h1>
      <MatchMedia />
    </div>
  );
}

export default App;
