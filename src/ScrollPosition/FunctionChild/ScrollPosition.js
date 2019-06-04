import React from "react";

function ScrollPosition({ children }) {
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

  return children(scrollStatus);
}

export default ScrollPosition;
