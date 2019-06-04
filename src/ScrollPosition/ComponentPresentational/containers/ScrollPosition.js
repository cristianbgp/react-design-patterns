import React from "react";
import ScrollPosition from "../components/ScrollPosition";

function ScrollPositionContainer() {
  const [scrollStatus, setScrollStatus] = React.useState(0);

  React.useEffect(() => {
    let ticking = false;

    function handleScroll(event) {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          setScrollStatus(window.scrollY);
          ticking = false;
        });

        ticking = true;
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrollStatus]);

  return <ScrollPosition scrollStatus={scrollStatus} />;
}

export default ScrollPositionContainer;
