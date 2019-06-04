/** @jsx jsx */
import React from "react";
import withScrollPosition from "./withScrollPosition";
import { jsx } from "@emotion/core";

function App({ scrollStatus }) {
  return (
    <>
      <div css={{ position: "fixed" }}>
        <h1>Using High order Components</h1>
        <p>
          Scroll Position: <span>{scrollStatus}</span>
        </p>
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

export default withScrollPosition(App);
