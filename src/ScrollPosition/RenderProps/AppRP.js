/** @jsx jsx */
import React from "react";
import ScrollPosition from "./ScrollPosition";
import { jsx } from "@emotion/core";

function App() {
  return (
    <>
      <div css={{ position: "fixed" }}>
        <h1>Using Render Props</h1>
        <ScrollPosition
          render={scrollStatus => {
            return (
              <p>
                Scroll Position: <span>{scrollStatus}</span>
              </p>
            );
          }}
        />
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
