import React from "react";

function usePageVisibility(initialStatus = true) {
  const [status, setStatus] = React.useState(initialStatus);

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

  return status;
}

export default usePageVisibility;
