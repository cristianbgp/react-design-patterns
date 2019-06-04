/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function MatchMedia({ mediaStatus }) {
  const colorTrue = { color: "green" };
  const colorFalse = { color: "red" };
  return (
    <p>
      Match media query (min-width: 600px):{" "}
      <span css={mediaStatus ? colorTrue : colorFalse}>
        {mediaStatus.toString()}
      </span>
    </p>
  );
}

export default MatchMedia;
