import gsap from "gsap";
import "./SectionHead.css";
import { useEffect, useRef } from "react";

const SectionHead = ({
  subTitle,
  titleText,
  highlightText,
  afterHighlight,
  limitAnimations,
}) => {
  const sectionRef = useRef();

  useEffect(() => {
    const element = sectionRef.current;

    if (limitAnimations) {
      // Set the CSS variable directly when animations are limited
      gsap.set(element, { "--highlight-line-scalex": "100%" });
      return;
    }

    // Check if the closest parent element matches the selector
    if (element.closest(".introduction, .intro")) {
      return;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 70%",
          end: "bottom center", // Optional: Set end to determine when the animation completes
        },
      });

      // Animation fromTo
      timeline.fromTo(
        element,
        { "--highlight-line-scalex": "0%" },
        {
          "--highlight-line-scalex": "100%",
          duration: 1,
          ease: "power2.out",
        },
        "<+=0" // Start immediately after the previous animation (if any)
      );
    }, sectionRef);

    // Cleanup function to revert the GSAP context on component unmount
    return () => {
      ctx.revert();
    };
  }, [limitAnimations]);

  return (
    <div>
      {subTitle && <p className="sub-title">{subTitle}</p>}
      <h2 className="section-title">
        {titleText}{" "}
        <span ref={sectionRef}>{highlightText && highlightText}</span>{" "}
        {afterHighlight && afterHighlight}
      </h2>
    </div>
  );
};

export default SectionHead;
