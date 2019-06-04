/** @jsx jsx */
import React from "react";
import MatchMedia from "./MatchMedia";
import { jsx } from "@emotion/core";

function App() {
  const colorTrue = { color: "green" };
  const colorFalse = { color: "red" };
  return (
    <div css={{ position: "fixed" }}>
      <h1>Using Functions as children</h1>
      <MatchMedia
        children={mediaStatus => {
          return (
            <p>
              Match media query (min-width: 600px):{" "}
              <span css={mediaStatus ? colorTrue : colorFalse}>
                {mediaStatus.toString()}
              </span>
            </p>
          );
        }}
      />
    </div>
  );
}

export default App;
