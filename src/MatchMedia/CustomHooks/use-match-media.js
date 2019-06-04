import React from "react";

function useMatchMedia(initialStatus = "true") {
  const [mediaStatus, setMediaStatus] = React.useState(initialStatus);

  React.useEffect(() => {
    function checkWidth(event) {
      let mq = window.matchMedia("(min-width: 600px)");
      setMediaStatus(mq.matches);
    }

    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [setMediaStatus]);

  return mediaStatus;
}

export default useMatchMedia;
