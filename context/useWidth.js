import React from "react";

export default function useWidth() {
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  // Handler to call on window resize
  function handleResize() {
    // Set window width/height to state
    setWindowSize({
      width: window.screen.width,
      height: window.screen.height,
      //   width: window.innerWidth,
      //   height: window.innerHeight,
    });
  }

  React.useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
