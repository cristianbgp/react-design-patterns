import React from "react";

function withPageVisibility(Component) {
  function PageVisibility() {
    const [status, setStatus] = React.useState(true);

    React.useEffect(() => {
      function handleVisibility(event) {
        if (document.hidden) {
          console.log("Page is not visible");
          setStatus(false);
        } else {
          console.log("Page is visible");
          setStatus(true);
        }
      }
      document.addEventListener("visibilitychange", handleVisibility);
      return () => {
        window.removeEventListener("visibilitychange", handleVisibility);
      };
    }, [setStatus]);

    return <Component status={status} />;
  }
  return PageVisibility;
}

export default withPageVisibility;
