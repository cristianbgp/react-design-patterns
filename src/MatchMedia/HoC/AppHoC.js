/** @jsx jsx */
import React from "react";
import withMatchMedia from "./withMatchMedia";
import { jsx } from "@emotion/core";

function App({ mediaStatus }) {
  const colorTrue = { color: "green" };
  const colorFalse = { color: "red" };
  return (
    <div css={{ position: "fixed" }}>
      <h1>Using High order Components</h1>
      <p>
        Match media query (min-width: 600px):{" "}
        <span css={mediaStatus ? colorTrue : colorFalse}>
          {mediaStatus.toString()}
        </span>
      </p>
    </div>
  );
}

export default withMatchMedia(App);
