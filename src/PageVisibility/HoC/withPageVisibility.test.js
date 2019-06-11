import React from "react";
import { render } from "@testing-library/react";
import withPageVisibility from "./withPageVisibility";

test("Page Visibility with HoC", () => {
  function Component({ status }) {
    return (
      <>
        <h1>Using High order Components</h1>
        <p>
          Page Visibility: <span>{status.toString()}</span>
        </p>
      </>
    );
  }

  const App = withPageVisibility(Component);
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
