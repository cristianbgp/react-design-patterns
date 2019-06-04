import React from "react";

function ScrollPosition({ children, render = children }) {
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

  return render(scrollStatus);
}

export default ScrollPosition;
