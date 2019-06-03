import React from "react";
import InternetConnection from "../components/InternetConnection";

function InternetConnectionContainer() {
  const [status, setStatus] = React.useState("online");

  React.useEffect(() => {
    function handleOffline(event) {
      console.log("offline");
      setStatus("offline");
    }
    function handleOnline(event) {
      console.log("online");
      setStatus("online");
    }
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, [setStatus]);

  return <InternetConnection status={status} />;
}

export default InternetConnectionContainer;
