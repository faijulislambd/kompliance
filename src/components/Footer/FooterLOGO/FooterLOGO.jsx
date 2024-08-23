import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

const FooterLOGO = () => {
  const footerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const footerElement = footerRef.current;

    // Create the GSAP timeline
    const timeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: footerElement,
        id: "logo_scroll_resize",
        endTrigger: "body",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });

    // Create animations for each element class
    footerElement.querySelectorAll(".komplice1").forEach((el) => {
      timeline.from(el, { y: "-50%" }, 0);
    });

    footerElement.querySelectorAll(".komplice2").forEach((el) => {
      timeline.from(el, { y: "-35%" }, 0);
    });

    footerElement.querySelectorAll(".komplice3").forEach((el) => {
      timeline.from(el, { y: "-20%" }, 0);
    });

    footerElement.querySelectorAll(".komplice4").forEach((el) => {
      timeline.from(el, { y: "-10%" }, 0);
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getById("logo_scroll_resize")?.kill();
    };
  }, []);

  return (
    <div className="pt-16 w-full">
      <div className="footer-logo-container w-full" ref={footerRef}>
        <a className="inline-block w-full" href="#">
          <svg
            width="300"
            height="60"
            className="logo-svg w-full h-auto overflow-visible"
            viewBox="0 0 300 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="logo">
              <g className="komplice3 k">
                <path
                  className="Vector_9"
                  d="M19.9261 30.6367L35.2067 53.1838H24.6444L13.4828 36.9287L9.58778 40.6755V53.1838H0V14.9824H9.58778V28.6907H11.9204L23.6698 15.7315H35.2067L19.9261 30.6367Z"
                  fill="white"
                />
                <path
                  className="Vector_10"
                  d="M9.5901 0H0V9.5901H9.5901V0Z"
                  fill="#FF4925"
                />
              </g>
              <g className="komplice1 o">
                <path
                  className="Vector"
                  d="M33.5664 34.3835C33.5664 22.8466 42.107 14.9824 53.3412 14.9824C64.5784 14.9824 73.116 22.9223 73.116 34.3835C73.116 45.9929 64.6526 53.9328 53.3412 53.9328C42.1812 53.9328 33.5664 45.9172 33.5664 34.3835ZM63.6039 34.3835C63.6039 28.1656 59.4849 23.2976 53.3412 23.2976C47.2006 23.2976 43.1542 28.1656 43.1542 34.3835C43.1542 40.6754 47.2006 45.6176 53.3412 45.6176C59.559 45.6176 63.6039 40.6754 63.6039 34.3835Z"
                  fill="white"
                />
              </g>
              <g className="komplice4 m">
                <path
                  className="Vector_2"
                  d="M77.0098 15.7315H85.7744L84.8853 20.1501H87.1968C89.22 17.3794 92.366 14.9824 97.4595 14.9824C103.376 14.9824 105.999 18.2041 107.271 20.9006H107.87C109.894 17.9786 113.189 14.9824 119.556 14.9824C127.271 14.9824 132.215 19.6265 132.215 28.6907V53.1838H122.627V30.4884C122.627 25.6945 119.781 23.2976 116.186 23.2976C112.141 23.2976 109.369 26.2938 109.369 31.012V53.1837H99.7808V30.788C99.7808 25.8428 97.01 23.2976 93.4146 23.2976C89.969 23.2976 86.5976 25.7687 86.5976 30.9363V53.1837H77.0098V15.7315Z"
                  fill="white"
                />
              </g>
              <g className="komplice1 p">
                <path
                  className="Vector_3"
                  d="M175.587 34.5317C175.587 46.742 167.797 53.9328 157.983 53.9328C152.89 53.9328 149.145 51.9096 147.123 49.664V68.1646H137.535V15.7315H145.325L144.436 20.1501H146.823C148.621 17.7531 152.141 14.9824 157.983 14.9824C168.021 14.9824 175.587 22.6227 175.587 34.5317ZM165.999 34.5317C165.999 27.7918 162.178 23.2976 156.485 23.2976C150.793 23.2976 147.123 27.7918 147.123 34.5317C147.123 41.1233 150.793 45.6176 156.485 45.6176C162.178 45.6176 165.999 41.1233 165.999 34.5317Z"
                  fill="white"
                />
              </g>
              <g className="komplice3 l">
                <path
                  className="Vector_4"
                  d="M179.568 0H189.156V53.1823H179.568V0Z"
                  fill="white"
                />
              </g>
              <g className="komplice1 i">
                <path
                  className="Vector_5"
                  d="M204.057 15.7266H194.469V53.1788H204.057V15.7266Z"
                  fill="white"
                />
                <path
                  className="Vector_6"
                  d="M204.059 0H194.469V9.5901H204.059V0Z"
                  fill="#418FDE"
                />
              </g>
              <g className="komplice4 c">
                <path
                  className="Vector_7"
                  d="M207.881 34.6074C207.881 22.8466 216.418 14.9824 227.357 14.9824C236.046 14.9824 244.284 19.6265 245.482 29.4382H235.894C235.071 25.9941 231.851 23.2976 227.357 23.2976C221.663 23.2976 217.469 27.9401 217.469 34.6074C217.469 41.199 221.364 45.6176 227.505 45.6176C231.851 45.6176 234.772 43.6716 235.97 40.2245H245.634C244.359 48.6138 237.244 53.9328 227.505 53.9328C215.819 53.9328 207.881 45.9172 207.881 34.6074Z"
                  fill="white"
                />
              </g>
              <g className="komplice2 e">
                <path
                  className="Vector_8"
                  d="M283.991 41.3488C282.493 49.0648 276.052 53.9328 266.539 53.9328C255.379 53.9328 247.289 46.3682 247.289 34.8314C247.289 22.4729 255.827 14.9824 266.165 14.9824C275.378 14.9824 283.917 20.825 283.917 34.2321C283.917 35.131 283.843 35.9557 283.767 37.0044H256.801C257.176 42.3975 260.696 46.2925 266.539 46.2925C270.733 46.2925 273.73 44.5705 274.778 41.3488H283.991ZM256.877 30.5626H274.778C274.554 25.9185 271.107 22.6227 266.165 22.6227C260.996 22.6227 257.55 26.0683 256.877 30.5626Z"
                  fill="white"
                />
              </g>
              <g className="point">
                <path
                  className="Vector_11"
                  d="M287.648 48.2363C287.648 45.0159 290.27 42.4697 293.34 42.4697C296.486 42.4697 299.032 45.0159 299.032 48.2363C299.032 51.3818 296.486 53.9283 293.34 53.9283C290.27 53.9283 287.648 51.3818 287.648 48.2363Z"
                  fill="#A7E6D7"
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FooterLOGO;
