import React from "react";
import { render } from "@testing-library/react";
import PageVisibility from "./PageVisibility";

test("Page Visibility with render props", () => {
  function Component() {
    return (
      <>
        <h1>Using Render Props</h1>
        <PageVisibility
          render={status => {
            return (
              <p>
                Page Visibility: <span>{status.toString()}</span>
              </p>
            );
          }}
        />
      </>
    );
  }

  const { asFragment } = render(<Component />);
  expect(asFragment()).toMatchSnapshot();
});
