import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, CustomEase } from "gsap/all";
import "./PageLoadAnimation.css";

gsap.registerPlugin(ScrollTrigger, CustomEase);

const PageLoadAnimation = ({ limitAnimations }) => {
  const overlayRef = useRef();
  const logoRef = useRef();
  const taglineRef = useRef();
  const pointRef = useRef();
  const hiddenDivRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      paused: false,
      onStart: () => {
        if (window.ff_scroll) window.ff_scroll.lock_scroll();
        document.documentElement.classList.add("first-load-anim-started");
      },
      onComplete: () => {
        document.documentElement.classList.remove("first-load-anim-started");
        document.documentElement.classList.add("first-load-anim-completed");
        if (window.ff_scroll) window.ff_scroll.unlock_scroll();
      },
    });

    // Set initial opacity
    tl.set("body, main, .header, .footer", { opacity: 1 }, 0);

    if (limitAnimations) {
      // Limited animations case
      const overlay = overlayRef.current;
      tl.fromTo(overlay, { opacity: 1 }, { opacity: 0, duration: 0.8 }, 1);
      tl.set(overlay, { display: "none" }, ">");
      return;
    }

    // Check if simplified page load animation should be used
    const simplifiedAnimation = !!sessionStorage.getItem(
      "ff_simplified_page_load_animation"
    );

    if (!simplifiedAnimation) {
      sessionStorage.setItem("ff_simplified_page_load_animation", true);
    }

    // Elements for animation
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    const tagline = taglineRef.current;
    const point = pointRef.current;

    const logoRect = logo.getBoundingClientRect();
    const pointRect = point.getBoundingClientRect();

    tl.fromTo(
      logo,
      { opacity: 0 },
      {
        opacity: 1,
        duration: simplifiedAnimation ? 1.2 : 1.5,
        ease: "power2.out",
      }
    );

    if (!simplifiedAnimation) {
      const words = tagline.querySelectorAll(".logo-overlay-tagline-word path");
      words.forEach((path, index) => {
        tl.fromTo(
          path,
          { opacity: 0 },
          { opacity: 1, duration: 0.001, stagger: 0.06 },
          index === 0 ? ">-0.9" : ">+0.26"
        );
      });
    } else {
      gsap.set(tagline, { display: "none" });
    }

    const diagonalDistance = Math.sqrt(
      Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2)
    );

    const scaleAmount = diagonalDistance / pointRect.width + 10;

    tl.set(
      logo,
      {
        transformOrigin: `${
          pointRect.left + pointRect.width / 2 - logoRect.left
        }px ${pointRect.top + pointRect.height / 2 - logoRect.top}px`,
      },
      simplifiedAnimation ? ">-0.8" : ">"
    );

    tl.to(
      logo,
      {
        scale: scaleAmount,
        rotate: 75,
        x: window.innerWidth / 2 - (pointRect.left + pointRect.width / 2),
        y: window.innerHeight / 2 - (pointRect.top + pointRect.height / 2),
        ease: "expo.out",
        force3D: false,
        duration: simplifiedAnimation ? 1 : 1.25,
      },
      ">"
    );

    const headerLogoPoint = document.querySelector(".header__logo svg .point");
    const hiddenDiv = hiddenDivRef.current;

    hiddenDiv.style.display = "none";
    hiddenDiv.style.position = "fixed";
    hiddenDiv.style.borderRadius = "50%";
    hiddenDiv.style.background = window
      .getComputedStyle(point.querySelector("path"))
      .getPropertyValue("fill");
    hiddenDiv.style.zIndex = window.getComputedStyle(overlay).zIndex;
    overlay.parentNode.insertBefore(hiddenDiv, overlay.nextSibling);

    tl.call(
      () => {
        hiddenDiv.style.display = "block";
        hiddenDiv.style.top = `${
          (diagonalDistance - window.innerHeight) / -2
        }px`;
        hiddenDiv.style.left = `${
          (diagonalDistance - window.innerWidth) / -2
        }px`;
        hiddenDiv.style.width = `${diagonalDistance}px`;
        hiddenDiv.style.height = `${diagonalDistance}px`;
      },
      null,
      ">"
    );

    tl.addLabel("temp_logo_point_to_header");
    tl.set(overlay, { display: "none" }, ">");

    tl.to(
      hiddenDiv,
      {
        width: () => headerLogoPoint.getBoundingClientRect().width,
        height: () => headerLogoPoint.getBoundingClientRect().height,
        x: (t, n) =>
          headerLogoPoint.getBoundingClientRect().left -
          n.getBoundingClientRect().left,
        y: (t, n) =>
          headerLogoPoint.getBoundingClientRect().top -
          n.getBoundingClientRect().top,
        ease: CustomEase.create(
          "",
          "M0,0 C0.364,0 0.395,0.085 0.47,0.61 0.494,0.778 0.497,0.846 0.554,0.925 0.608,1 0.682,1 1,1 "
        ),
        duration: 1.15,
      },
      ">"
    );

    tl.call(
      () => {
        hiddenDiv.style.display = "none";
      },
      null,
      ">"
    );

    tl.from(
      ".header__logo .logo > g:not(.point)",
      {
        y: () =>
          -parseFloat(
            document.querySelector(".header__logo svg").getAttribute("height")
          ) - 15,
        duration: 0.7,
        ease: "expo.out",
        stagger: 0.06,
      },
      "temp_logo_point_to_header+=0.35"
    );

    tl.fromTo(
      ".header__logo .Vector_10, .header__logo .Vector_6",
      { y: "-100%" },
      { y: 0, duration: 0.45, ease: "power4.out", stagger: 0.3 },
      ">-0.35"
    );

    tl.from(
      ".nav__container > *",
      { x: "12rem", duration: 1.8, ease: "expo.out", stagger: 0.3 },
      "temp_logo_point_to_header-=0.1"
    );

    const pageEnterAnimation = window.ff_animations.get_page_enter_animation();
    if (pageEnterAnimation) {
      tl.addLabel("page_enter_animation", "temp_logo_point_to_header+=0.3");
      tl.add(pageEnterAnimation, "page_enter_animation");
    }

    return () => {
      // Cleanup any created elements or styles
      tl.kill();
    };
  }, [limitAnimations]);

  return (
    <div className="load-overlay" ref={overlayRef}>
      <div className="load-overlay__container-logo">
        <div className="load-overlay__logo" ref={logoRef}>
          <svg
            width="360"
            height="114"
            viewBox="0 0 360 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="logo-overlay-en" clipPath="url(#clip0_4175_8370)">
              <g id="logo">
                <g id="k">
                  <path
                    id="Vector"
                    d="M24.0051 36.8851L42.3821 64.0012H29.6794L16.256 44.4521L11.5717 48.9581V64.0012H0.0410156V18.0586H11.5717V34.5448H14.377L28.5074 18.9594H42.3821L24.0051 36.8851Z"
                    fill="white"
                  />
                  <path
                    id="Vector_2"
                    d="M11.5745 0.0439453H0.0410156V11.5774H11.5745V0.0439453Z"
                    fill="#FF4925"
                  />
                </g>
                <g id="o">
                  <path
                    id="Vector_3"
                    d="M40.4023 41.3911C40.4023 27.5165 50.6737 18.0586 64.1844 18.0586C77.6987 18.0586 87.9664 27.6074 87.9664 41.3911C87.9664 55.3532 77.7879 64.902 64.1844 64.902C50.7629 64.902 40.4023 55.2622 40.4023 41.3911ZM76.5267 41.3911C76.5267 33.9133 71.5731 28.0588 64.1844 28.0588C56.7994 28.0588 51.933 33.9133 51.933 41.3911C51.933 48.9582 56.7994 54.9018 64.1844 54.9018C71.6622 54.9018 76.5267 48.9582 76.5267 41.3911Z"
                    fill="white"
                  />
                </g>
                <g id="m">
                  <path
                    id="Vector_4"
                    d="M92.6582 18.9594H103.199L102.13 24.2734H104.91C107.343 20.9413 111.126 18.0586 117.252 18.0586C124.368 18.0586 127.521 21.9331 129.052 25.1761H129.773C132.206 21.6619 136.169 18.0586 143.826 18.0586C153.105 18.0586 159.051 23.6438 159.051 34.5448V64.0012H147.52V36.7068C147.52 30.9414 144.097 28.0588 139.773 28.0588C134.908 28.0588 131.574 31.6621 131.574 37.3365V64.0012H120.044V37.0671C120.044 31.1198 116.711 28.0588 112.387 28.0588C108.244 28.0588 104.189 31.0306 104.189 37.2455V64.0012H92.6582L92.6582 18.9594Z"
                    fill="white"
                  />
                </g>
                <g id="p">
                  <path
                    id="Vector_5"
                    d="M211.216 41.5695C211.216 56.254 201.847 64.902 190.045 64.902C183.919 64.902 179.415 62.4688 176.984 59.7682V82.0179H165.453V18.9594H174.822L173.753 24.2734H176.623C178.785 21.3908 183.019 18.0586 190.045 18.0586C202.116 18.0586 211.216 27.2471 211.216 41.5695ZM199.685 41.5695C199.685 33.4638 195.09 28.0588 188.243 28.0588C181.397 28.0588 176.984 33.4638 176.984 41.5695C176.984 49.4968 181.397 54.9018 188.243 54.9018C195.09 54.9018 199.685 49.4968 199.685 41.5695Z"
                    fill="white"
                  />
                </g>
                <g id="l">
                  <path
                    id="Vector_6"
                    d="M215.994 0.0419922H227.525V64.0013H215.994V0.0419922Z"
                    fill="white"
                  />
                </g>
                <g id="i">
                  <path
                    id="Vector_7"
                    d="M245.451 18.96H233.92V64.0017H245.451V18.96Z"
                    fill="white"
                  />
                  <path
                    id="Vector_8"
                    d="M245.453 0.0439453H233.92V11.5774H245.453V0.0439453Z"
                    fill="#418FDE"
                  />
                </g>
                <g id="c">
                  <path
                    id="Vector_9"
                    d="M250.047 41.6605C250.047 27.5165 260.315 18.0586 273.47 18.0586C283.919 18.0586 293.827 23.6438 295.268 35.4438H283.737C282.747 31.3018 278.875 28.0588 273.47 28.0588C266.622 28.0588 261.578 33.6421 261.578 41.6605C261.578 49.5878 266.262 54.9018 273.648 54.9018C278.875 54.9018 282.387 52.5615 283.828 48.4158H295.45C293.918 58.5052 285.361 64.902 273.648 64.902C259.594 64.902 250.047 55.2622 250.047 41.6605Z"
                    fill="white"
                  />
                </g>
                <g id="e">
                  <path
                    id="Vector_10"
                    d="M341.577 49.768C339.775 59.0475 332.03 64.902 320.588 64.902C307.167 64.902 297.438 55.8045 297.438 41.9298C297.438 27.067 307.705 18.0586 320.139 18.0586C331.218 18.0586 341.487 25.0851 341.487 41.2092C341.487 42.2902 341.398 43.282 341.307 44.5432H308.877C309.329 51.0292 313.562 55.7135 320.588 55.7135C325.633 55.7135 329.236 53.6425 330.497 49.768L341.577 49.768ZM308.968 36.796H330.497C330.228 31.2108 326.082 27.2471 320.139 27.2471C313.922 27.2471 309.778 31.391 308.968 36.796Z"
                    fill="white"
                  />
                </g>
                <g id="point" ref={pointRef}>
                  <path
                    id="vector"
                    d="M345.988 58.0563C345.988 54.1832 349.141 51.1211 352.834 51.1211C356.617 51.1211 359.679 54.1832 359.679 58.0563C359.679 61.8391 356.617 64.9017 352.834 64.9017C349.141 64.9017 345.988 61.8391 345.988 58.0563Z"
                    fill="#A7E6D7"
                  />
                </g>
              </g>
              <g id="tagline" ref={taglineRef}>
                <g className="logo-overlay-tagline-word">
                  <path
                    id="Vector_11"
                    d="M204.8 106.4C204.8 110.2 203 113 198.7 113H195.1V99.7998H198.7C202.8 99.7998 204.8 102.4 204.8 106.4ZM203.8 106.4C203.8 103.1 202.4 100.7 198.6 100.7H196.1V112H198.6C202.4 112.1 203.8 109.7 203.8 106.4Z"
                    fill="white"
                  />
                  <path
                    id="Vector_12"
                    d="M214.699 112.199V112.999H214.199C213.299 112.999 212.899 112.599 212.799 111.799C212.099 112.699 210.999 113.199 209.599 113.199C207.999 113.199 206.699 112.399 206.699 110.599C206.699 108.799 208.099 107.899 209.999 107.699L212.699 107.499V106.799C212.699 105.299 211.999 104.299 210.399 104.299C208.899 104.299 208.299 105.199 207.999 106.399H206.999C207.199 104.699 208.399 103.399 210.299 103.399C212.299 103.399 213.599 104.599 213.599 106.599V111.399C213.599 111.999 213.899 112.199 214.399 112.199H214.699ZM212.699 108.199L210.199 108.399C208.699 108.499 207.599 109.199 207.599 110.499C207.599 111.799 208.599 112.299 209.599 112.299C211.099 112.299 212.599 111.499 212.599 109.399V108.199H212.699Z"
                    fill="white"
                  />
                  <path
                    id="Vector_13"
                    d="M216.199 103.599H217.099L217.199 104.899H217.299C217.699 104.099 218.399 103.399 219.899 103.399H220.399V104.399C220.199 104.399 219.999 104.399 219.699 104.399C218.499 104.399 217.299 105.399 217.299 107.599V113.099H216.299V103.599H216.199Z"
                    fill="white"
                  />
                  <path
                    id="Vector_14"
                    d="M228.799 108.4H221.599C221.699 110.7 222.999 112.3 224.899 112.3C226.299 112.3 227.399 111.7 227.799 110.4H228.799C228.399 112.2 226.899 113.1 224.999 113.1C222.499 113.1 220.699 111.2 220.699 108.3C220.699 105.2 222.499 103.3 224.999 103.3C227.199 103.3 228.999 104.9 228.999 107.9C228.899 108.1 228.899 108.3 228.799 108.4ZM221.599 107.6H227.899C227.899 105.5 226.699 104.2 224.899 104.2C223.099 104.2 221.799 105.7 221.599 107.6Z"
                    fill="white"
                  />
                  <path
                    id="Vector_15"
                    d="M230.5 112.299C230.5 111.799 230.9 111.399 231.4 111.399C231.9 111.399 232.2 111.799 232.2 112.299C232.2 112.799 231.8 113.099 231.4 113.099C231 113.099 230.5 112.699 230.5 112.299Z"
                    fill="white"
                  />
                </g>

                <g className="logo-overlay-tagline-word">
                  <path
                    id="Vector_16"
                    d="M247.6 103.6C247.6 106 246 107.4 243.6 107.4H240.3V113H239.3V99.7998H243.7C246.1 99.7998 247.6 101.3 247.6 103.6ZM246.6 103.6C246.6 101.7 245.3 100.7 243.7 100.7H240.3V106.4H243.5C245.5 106.4 246.6 105.4 246.6 103.6Z"
                    fill="white"
                  />
                  <path
                    id="Vector_17"
                    d="M257.1 108.4H249.9C250 110.7 251.3 112.3 253.2 112.3C254.6 112.3 255.7 111.7 256.1 110.4H257.1C256.7 112.2 255.2 113.1 253.3 113.1C250.8 113.1 249 111.2 249 108.3C249 105.2 250.8 103.3 253.3 103.3C255.5 103.3 257.3 104.9 257.3 107.9C257.2 108.1 257.2 108.3 257.1 108.4ZM249.9 107.6H256.2C256.2 105.5 255 104.2 253.2 104.2C251.4 104.2 250.1 105.7 249.9 107.6Z"
                    fill="white"
                  />
                  <path
                    id="Vector_18"
                    d="M259.1 103.599H259.9L260 104.899H260.1C260.5 104.099 261.2 103.399 262.7 103.399H263.2V104.399C263 104.399 262.8 104.399 262.5 104.399C261.3 104.399 260.1 105.399 260.1 107.599V113.099H259.1V103.599Z"
                    fill="white"
                  />
                  <path
                    id="Vector_19"
                    d="M266.9 103.599H269V104.399H266.9V112.999H265.9V104.399H264V103.599H265.9V101.599C265.9 100.399 266.7 99.6992 267.9 99.6992C268.4 99.6992 268.8 99.7992 269.1 99.8992L268.9 100.699C268.6 100.599 268.3 100.499 268.1 100.499C267.2 100.499 266.9 100.999 266.9 101.699V103.599Z"
                    fill="white"
                  />
                  <path
                    id="Vector_20"
                    d="M269.5 108.299C269.5 105.499 271.3 103.399 274 103.399C276.6 103.399 278.5 105.599 278.5 108.299C278.5 111.099 276.6 113.199 274 113.199C271.3 113.199 269.5 110.999 269.5 108.299ZM277.5 108.299C277.5 106.099 276.1 104.299 273.9 104.299C271.7 104.299 270.4 106.099 270.4 108.299C270.4 110.499 271.8 112.299 273.9 112.299C276 112.299 277.5 110.499 277.5 108.299Z"
                    fill="white"
                  />
                  <path
                    id="Vector_21"
                    d="M280.399 103.599H281.299L281.399 104.899H281.499C281.899 104.099 282.599 103.399 284.099 103.399H284.599V104.399C284.399 104.399 284.199 104.399 283.899 104.399C282.699 104.399 281.499 105.399 281.499 107.599V113.099H280.499V103.599H280.399Z"
                    fill="white"
                  />
                  <path
                    id="Vector_22"
                    d="M285.799 103.599H286.699L286.799 104.699H286.899C287.399 103.999 288.099 103.399 289.399 103.399C290.999 103.399 291.799 104.399 291.999 105.199H292.099C292.499 104.399 293.299 103.399 294.899 103.399C296.599 103.399 297.899 104.399 297.899 106.599V113.099H296.899V106.799C296.899 105.099 295.899 104.299 294.799 104.299C293.399 104.299 292.299 105.499 292.299 107.099V112.999H291.299V106.899C291.299 105.099 290.299 104.299 289.099 104.299C287.999 104.299 286.699 105.099 286.699 106.999V112.999H285.699V103.599H285.799Z"
                    fill="white"
                  />
                  <path
                    id="Vector_23"
                    d="M300.1 112.299C300.1 111.799 300.5 111.399 300.9 111.399C301.4 111.399 301.7 111.799 301.7 112.299C301.7 112.799 301.3 113.099 300.9 113.099C300.5 113.099 300.1 112.699 300.1 112.299Z"
                    fill="white"
                  />
                </g>

                <g className="logo-overlay-tagline-word">
                  <path
                    id="Vector_24"
                    d="M316.899 112.1V113H308.899V99.7998H316.699V100.7H309.899V105.8H315.999V106.7H309.899V112H316.899V112.1Z"
                    fill="white"
                  />
                  <path
                    id="Vector_25"
                    d="M317.399 103.6H318.399L321.499 112H321.599L324.799 103.6H325.799L322.199 113H320.899L317.399 103.6Z"
                    fill="white"
                  />
                  <path
                    id="Vector_26"
                    d="M326.3 108.299C326.3 105.499 328.1 103.399 330.8 103.399C333.4 103.399 335.3 105.599 335.3 108.299C335.3 111.099 333.4 113.199 330.8 113.199C328.1 113.199 326.3 110.999 326.3 108.299ZM334.3 108.299C334.3 106.099 332.9 104.299 330.7 104.299C328.5 104.299 327.2 106.099 327.2 108.299C327.2 110.499 328.6 112.299 330.7 112.299C332.8 112.299 334.3 110.499 334.3 108.299Z"
                    fill="white"
                  />
                  <path
                    id="Vector_27"
                    d="M337.199 99.5996H338.199V113H337.199V99.5996Z"
                    fill="white"
                  />
                  <path
                    id="Vector_28"
                    d="M339.5 103.6H340.5L343.6 112H343.7L346.9 103.6H347.9L344.3 113H343L339.5 103.6Z"
                    fill="white"
                  />
                  <path
                    id="Vector_29"
                    d="M356.499 108.4H349.299C349.399 110.7 350.699 112.3 352.599 112.3C353.999 112.3 355.099 111.7 355.499 110.4H356.499C356.099 112.2 354.599 113.1 352.699 113.1C350.199 113.1 348.399 111.2 348.399 108.3C348.399 105.2 350.199 103.3 352.699 103.3C354.899 103.3 356.699 104.9 356.699 107.9C356.599 108.1 356.599 108.3 356.499 108.4ZM349.299 107.6H355.599C355.599 105.5 354.399 104.2 352.599 104.2C350.799 104.2 349.499 105.7 349.299 107.6Z"
                    fill="white"
                  />
                  <path
                    id="Vector_30"
                    d="M358.199 112.299C358.199 111.799 358.599 111.399 358.999 111.399C359.499 111.399 359.799 111.799 359.799 112.299C359.799 112.799 359.399 113.099 358.999 113.099C358.599 113.099 358.199 112.699 358.199 112.299Z"
                    fill="white"
                  />
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_4175_8370">
                <rect width="360" height="114" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div ref={hiddenDivRef}></div>
    </div>
  );
};

export default PageLoadAnimation;
