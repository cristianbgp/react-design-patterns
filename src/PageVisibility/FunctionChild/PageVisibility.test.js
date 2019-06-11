import React from "react";
import { render } from "@testing-library/react";

import PageVisibility from "./PageVisibility";

test("Page Visibility with function as children", () => {
  function Component() {
    return (
      <>
        <h1>Using Function as children</h1>
        <PageVisibility>
          {status => {
            return (
              <p>
                Page Visibility: <span>{status.toString()}</span>
              </p>
            );
          }}
        </PageVisibility>
      </>
    );
  }

  const { asFragment } = render(<Component />);

  expect(asFragment()).toMatchSnapshot();
});
