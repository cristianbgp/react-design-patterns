/** @jsx jsx */
import React from "react";
import ScrollPosition from "./ScrollPosition";
import { jsx } from "@emotion/core";

function App() {
  return (
    <>
      <div css={{ position: "fixed" }}>
        <h1>Using Function as children</h1>
        <ScrollPosition>
          {scrollStatus => {
            return (
              <p>
                Scroll Position: <span>{scrollStatus}</span>
              </p>
            );
          }}
        </ScrollPosition>
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
