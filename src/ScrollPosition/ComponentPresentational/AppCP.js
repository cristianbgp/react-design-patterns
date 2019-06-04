/** @jsx jsx */
import React from "react";
import ScrollPosition from "./containers/ScrollPosition";
import { jsx } from "@emotion/core";

function App() {
  return (
    <>
      <div css={{ position: "fixed" }}>
        <h1>Using Components & Presentational</h1>
        <ScrollPosition />
      </div>
      <div
        css={{
          background: "gray",
          height: "2000px"
        }}
      />
    </>
  );
}

export default App;
