/** @jsx jsx */
import React from "react";
import useMatchMedia from "./use-match-media";
import { jsx } from "@emotion/core";

function App() {
  const mediaStatus = useMatchMedia();
  const colorTrue = { color: "green" };
  const colorFalse = { color: "red" };
  return (
    <div css={{ position: "fixed" }}>
      <h1>Using Custom Hooks</h1>
      <p>
        Match media query (min-width: 600px):{" "}
        <span css={mediaStatus ? colorTrue : colorFalse}>
          {mediaStatus.toString()}
        </span>
      </p>
    </div>
  );
}

export default App;
