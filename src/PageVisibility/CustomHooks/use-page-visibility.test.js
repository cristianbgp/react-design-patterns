import React from "react";
import { render } from "@testing-library/react";

import usePageVisibility from "./use-page-visibility";

test("Page visibility with custom hooks", () => {
  function Component() {
    const status = usePageVisibility();
    return (
      <>
        <h1>Using Custom Hooks</h1>
        <p>
          Page Visibility: <span>{status.toString()}</span>
        </p>
      </>
    );
  }
  const { asFragment } = render(<Component />);

  expect(asFragment()).toMatchSnapshot();
});
