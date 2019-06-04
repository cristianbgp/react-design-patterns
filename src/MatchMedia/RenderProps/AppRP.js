/** @jsx jsx */
import React from "react";
import MatchMedia from "./MatchMedia";
import { jsx } from "@emotion/core";

function App() {
  const colorTrue = { color: "green" };
  const colorFalse = { color: "red" };
  return (
    <div css={{ position: "fixed" }}>
      <h1>Using Render Props</h1>
      <MatchMedia
        render={mediaStatus => {
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
