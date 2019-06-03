import React from "react";
import PageVisibility from "../components/PageVisibility";

function PageVisibilityContainer() {
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

  return <PageVisibility status={status} />;
}

export default PageVisibilityContainer;
