/** @jsx jsx */
import React from "react";
import useScrollPosition from "./use-scroll-position";
import { jsx } from "@emotion/core";

function App() {
  const scrollStatus = useScrollPosition();
  return (
    <>
      <div css={{ position: "fixed" }}>
        <h1>Using Custom Hooks</h1>
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

export default App;
