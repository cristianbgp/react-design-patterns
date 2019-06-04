import React from "react";
import { render } from "react-dom";
import { Global } from "@emotion/core";

//PAGE VISIBILITY
// import App from "./PageVisibility/ContainerPresentional/AppCP"; //Component & Presentional
// import App from "./PageVisibility/FunctionChild/AppFC"; // Function as children
// import App from "./PageVisibility/HoC/AppHoC"; // High order Components
// import App from "./PageVisibility/RenderProps/AppRP"; // Render Props
// import App from "./PageVisibility/CustomHooks/AppCH"; // Custom Hooks

//INTERNET CONNECTION
// import App from "./InternetConnection/CustomHooks/AppCH"; // Custom Hooks
// import App from "./InternetConnection/ContainerPresentational/AppCP"; // Component & Presentional
// import App from "./InternetConnection/RenderProps/AppRP"; // Render Props
// import App from "./InternetConnection/FunctionChild/AppFC"; // Function as children
// import App from "./InternetConnection/HoC/AppHoC"; // High order Components

//SCROLL POSITION
import App from "./ScrollPosition/CustomHooks/AppCH"; // Custom Hooks
// import App from "./ScrollPosition/RenderProps/AppRP"; // Render Props
// import App from "./ScrollPosition/FunctionChild/AppFC"; // Function as children
// import App from "./ScrollPosition/HoC/AppHoC"; // High order Components
// import App from "./ScrollPosition/ComponentPresentational/AppCP"; // Component & Presentational

render(
  <>
    <Global
      styles={{
        body: {
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
        }
      }}
    />
    <App />
  </>,
  document.getElementById("root")
);
