import { useEffect, useRef } from "react";
import gsap from "gsap";

const useScrollSnap = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const elements = ref.current.querySelectorAll("[data-scroll-snap]");

      elements.forEach((element) => {
        const scrollSnap = element.getAttribute("data-scroll-snap");
        const scrollSnapTrigger = element.getAttribute(
          "data-scroll-snap-trigger"
        );
        const scrollSnapOffset = element.getAttribute(
          "data-scroll-snap-offset"
        );

        const triggerElement = scrollSnapTrigger
          ? ref.current.querySelector(scrollSnapTrigger)
          : element;
        let offset = 0;

        if (scrollSnap === "center") {
          offset = (window.innerHeight - triggerElement.offsetHeight) / 2;
        } else if (scrollSnap === "bottom") {
          offset = window.innerHeight - triggerElement.offsetHeight;
        }

        if (offset || offset === 0) {
          const finalOffset = scrollSnapOffset
            ? `calc(${scrollSnapOffset} + ${offset}px)`
            : offset;
          gsap.set(element, { position: "sticky", top: finalOffset });
        }
      });
    };

    // Initial positioning
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return ref;
};

export default useScrollSnap;
