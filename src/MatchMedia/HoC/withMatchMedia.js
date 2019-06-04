import React from "react";

function withMatchMedia(Component) {
  function MatchMedia() {
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

    return <Component mediaStatus={mediaStatus} />;
  }
  return MatchMedia;
}

export default withMatchMedia;
