import React from "react";

function PageVisibility({ children, render = children }) {
  const [status, setStatus] = React.useState(true);

  function handleVisibility(event) {
    if (document.hidden) {
      console.log("Page is not visible");
      setStatus(false);
    } else {
      console.log("Page is visible");
      setStatus(true);
    }
  }

  React.useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [setStatus]);

  return render(status);
}

export default PageVisibility;
