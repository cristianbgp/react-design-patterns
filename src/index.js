import React from "react";
import { render } from "react-dom";
// import App from "./PageVisibility/ContainerPresentional/AppCP"; //Component & Presentional
// import App from "./PageVisibility/FunctionChild/AppFC"; // Function as children
// import App from "./PageVisibility/HoC/AppHoC"; // High order Components
// import App from "./PageVisibility/RenderProps/AppRP"; // Render Props
import App from "./PageVisibility/CustomHooks/AppCH"; // Custom Hooks

render(<App />, document.getElementById("root"));
