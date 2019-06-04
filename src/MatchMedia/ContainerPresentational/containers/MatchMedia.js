import React from "react";
import MatchMedia from "../components/MatchMedia";

function MatchMediaContainer() {
  const [mediaStatus, setMediaStatus] = React.useState(true);

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

  return <MatchMedia mediaStatus={mediaStatus} />;
}

export default MatchMediaContainer;
