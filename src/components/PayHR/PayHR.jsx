import { useEffect, useRef } from "react";
import orange from "./../../assets/gradient-orange.png";
import blue from "./../../assets/gradient-blue.png";
import CursorGradient from "./CursorGradient/CursorGradient";
import "./CursorGradient/CursorGradient.css";
import gsap from "gsap";

const PayHR = () => {
  const leftCircle = useRef(null);
  const rightCircle = useRef(null);
  const cursorContainer = useRef(null);
  const arrowBall = useRef(null);
  const cursorLeftContainer = useRef(null);
  const cursorRightContainer = useRef(null);

  useEffect(() => {
    const elementLeft = leftCircle.current;
    const elementRight = leftCircle.current;
    const container = cursorContainer.current;
    const arrow = arrowBall.current;
    const leftContainer = cursorLeftContainer.current;
    const rightContainer = cursorRightContainer.current;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      // Calculate the position relative to the container's boundaries
      let x = clientX - 100 / 2;
      let y = clientY - 100 / 2;

      gsap.to(arrow, {
        opacity: 1,
        x: x,
        y: y,
        duration: 0.1, // Shorter duration for a more responsive feel
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      container.addEventListener("mousemove", handleMouseMove);

      gsap.to(arrow, {
        scale: 1, // Scale up the element
        duration: 0.1,
        ease: "power4.in",
      });
    };

    const handleMouseLeave = () => {
      container.removeEventListener("mousemove", handleMouseMove);
      gsap.to(arrow, {
        scale: 0, // Scale down the element
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleLeftMouseMove = (event) => {
      const { clientX, clientY } = event;
      const elementWidth = elementLeft.offsetWidth;
      const elementHeight = elementLeft.offsetHeight;
      let xa = clientX - elementWidth / 2;
      let ya = clientY - elementHeight / 2;
      let x = clientX - 100 / 2;
      let y = clientY - 100 / 2;

      gsap.to(elementLeft, {
        opacity: 1,
        x: xa,
        y: ya,
        duration: 0.1, // Shorter duration for a more responsive feel
        ease: "power2.out",
      });
      gsap.to(arrow, {
        opacity: 1,
        x: x,
        y: y,
        duration: 0.1, // Shorter duration for a more responsive feel
        ease: "power2.out",
      });
    };

    const handleMouseEnterLeftContainer = () => {
      leftContainer.addEventListener("mousemove", handleLeftMouseMove);
      rightContainer.removeEventListener("mousemove", handleRightMouseMove);
      gsap.to(elementLeft, {
        scale: 10, // Scale up the element
        duration: 0.3,
        ease: "power4.in",
      });
    };

    const handleMouseLeaveLeftContainer = () => {
      leftContainer.removeEventListener("mousemove", handleLeftMouseMove);
      gsap.to(elementLeft, {
        scale: 0, // Scale up the element
        duration: 0.3,
        ease: "power4.in",
      });
    };

    const handleRightMouseMove = (e) => {
      const { clientX, clientY } = e;
      const elementWidth = elementRight.offsetWidth;
      const elementHeight = elementRight.offsetHeight;
      let xa = clientX - elementWidth / 2;
      let ya = clientY - elementHeight / 2;
      let x = clientX - 100 / 2;
      let y = clientY - 100 / 2;

      gsap.to(elementRight, {
        opacity: 1,
        x: xa,
        y: ya,
        duration: 0.1, // Shorter duration for a more responsive feel
        ease: "power4.out",
      });
      gsap.to(arrow, {
        opacity: 1,
        x: x,
        y: y,
        duration: 0.1, // Shorter duration for a more responsive feel
        ease: "power4.out",
      });
    };

    const handleMouseEnterRightContainer = () => {
      rightContainer.addEventListener("mousemove", handleRightMouseMove);
      leftContainer.removeEventListener("mousemove", handleLeftMouseMove);

      gsap.to(elementRight, {
        scale: 10, // Scale up the element
        duration: 0.3,
        ease: "power4.in",
      });
    };

    const handleMouseLeaveRightContainer = () => {
      rightContainer.removeEventListener("mousemove", handleRightMouseMove);
      gsap.to(elementRight, {
        scale: 0, // Scale up the element
        duration: 0.3,
        ease: "power4.in",
      });
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    leftContainer.addEventListener("mouseenter", handleMouseEnterLeftContainer);
    rightContainer.addEventListener(
      "mouseenter",
      handleMouseEnterRightContainer
    );
    container.addEventListener("mouseleave", handleMouseLeave);
    leftContainer.addEventListener("mouseleave", handleMouseLeaveLeftContainer);
    rightContainer.addEventListener(
      "mouseleave",
      handleMouseLeaveRightContainer
    );

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      leftContainer.removeEventListener(
        "mouseenter",
        handleMouseEnterLeftContainer
      );
      rightContainer.removeEventListener(
        "mouseenter",
        handleMouseEnterRightContainer
      );
      container.removeEventListener("mouseleave", handleMouseLeave);
      leftContainer.removeEventListener(
        "mouseleave",
        handleMouseLeaveLeftContainer
      );
      container.removeEventListener("mouseleave", handleMouseLeave);
      rightContainer.removeEventListener(
        "mouseleave",
        handleMouseLeaveRightContainer
      );
      container.removeEventListener("mousemove", handleMouseMove);
      leftContainer.removeEventListener("mousemove", handleLeftMouseMove);
      rightContainer.removeEventListener("mousemove", handleRightMouseMove);
    };
  }, []);

  return (
    <section className="py-32 overflow-hidden" ref={cursorContainer}>
      <div
        className="inner-arrow-ball pointer-events-none z-[1]"
        ref={arrowBall}
      ></div>
      <div className="py-[100vh] -my-[100vh] pointer-events-none">
        <div className="content-wrapper flex flex-wrap justify-around w-full items-center pointer-events-auto text-white relative">
          <a
            href="#"
            className="py-[18rem] -my-[18rem] w-1/2 flex flex-col items-center"
            ref={cursorLeftContainer}
          >
            <div ref={leftCircle} className="fixed left-0 top-0">
              <CursorGradient src={orange} />
            </div>
            <div>
              <h2 className="uppercase text-[8rem]">Payroll</h2>
              <h4 className="text-6xl">Expertise</h4>
            </div>
          </a>
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[18] text-white font-[6rem] opacity-30">
            and
          </div>
          <a
            href="#"
            className="py-[18rem] -my-[18rem] w-1/2 flex flex-col items-center"
            ref={cursorRightContainer}
          >
            <div ref={rightCircle} className="fixed left-0 right-0">
              <CursorGradient src={blue} />
            </div>
            <div>
              <h2 className="uppercase text-[8rem]">HRIS</h2>
              <h4 className="text-6xl">Expertise</h4>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PayHR;
