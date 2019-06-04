import React from "react";

function useScrollPosition(initialStatus = 0) {
  const [scrollStatus, setScrollStatus] = React.useState(initialStatus);

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

  return scrollStatus;
}

export default useScrollPosition;
