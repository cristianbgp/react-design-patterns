import React from "react";

function withInternetConnection(Component) {
  function InternetConnection() {
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

    return <Component status={status} />;
  }
  return InternetConnection;
}

export default withInternetConnection;
