import SectionHead from "../../utils/SectionHead/SectionHead";
import "./Client.css";
import client1 from "./../../assets/clients/1.png";
import client2 from "./../../assets/clients/2.png";
import client3 from "./../../assets/clients/3.png";
import client4 from "./../../assets/clients/4.png";
import client5 from "./../../assets/clients/5.png";
import client6 from "./../../assets/clients/6.png";
import client7 from "./../../assets/clients/7.png";
import client8 from "./../../assets/clients/8.png";
import client9 from "./../../assets/clients/9.png";
import client10 from "./../../assets/clients/10.png";
import ClientCard from "./ClientCard/ClientCard";
import { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import useScrollSnap from "../../hooks/useScrollSnap";

const Clients = ({ prevSection, nextSection }) => {
  const snapScroll = useScrollSnap();
  const sectionRef = useRef(null);
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Check if refs are attached to the elements
    // if (!prevSection.current || !nextSection.current) {
    //   return; // Exit if refs are not set
    // }
    const setupAnimation = () => {
      const column1 = column1Ref.current;
      const column2 = column2Ref.current;

      let paddingBottom = 0;
      let paddingTop = 0;

      // Calculate padding dynamically from props
      if (prevSection && prevSection.current instanceof HTMLElement) {
        paddingBottom = parseFloat(
          window.getComputedStyle(prevSection.current).paddingBottom || "0"
        );
      }

      console.log("Curren Next", nextSection.current);

      if (nextSection && nextSection.current instanceof HTMLElement) {
        paddingTop = parseFloat(
          window.getComputedStyle(nextSection.current).paddingTop || "0"
        );
      }

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: () => `top-=${paddingBottom + 200}px top`,
          end: () => `bottom+=${paddingTop}px bottom`,
          scrub: 0.3,
          invalidateOnRefresh: true,
        },
      });

      // Selecting columns
      const columns = document.querySelectorAll(
        ".clients__logo-column-inner-2"
      );

      columns.forEach((column, index) => {
        const parentColumn = column.closest(".clients__logo-column");
        const parentHeight = parentColumn.offsetHeight;
        const columnHeight = column.offsetHeight;

        console.log(columnHeight);

        if (index === 0) {
          timeline.fromTo(
            column,
            { y: 0 },
            { y: -columnHeight + parentHeight },
            0
          );
        } else {
          timeline.fromTo(
            column,
            { y: -columnHeight + parentHeight },
            { y: 0 },
            0
          );
        }
      });

      // Define reset, enter, and leave animations
      const resetColumns = () => {
        sectionRef.current.classList.remove(
          "clients__intro--columns-shown",
          "clients__intro--at-start",
          "clients__intro--at-end"
        );
        gsap.set(column1.querySelector(".clients__logo-column-inner-1"), {
          y: "110%",
          opacity: 0,
        });
        gsap.set(column2.querySelector(".clients__logo-column-inner-1"), {
          y: "-110%",
          opacity: 0,
        });
        gsap.set(sectionRef.current.querySelector(".clients__logo-container"), {
          pointerEvents: "none",
        });
      };

      const enterAnimation = () => {
        sectionRef.current.classList.add("clients__intro--columns-shown");
        sectionRef.current.classList.remove(
          "clients__intro--at-start",
          "clients__intro--at-end"
        );
        gsap.set(
          [
            column1.querySelector(".clients__logo-column-inner-1"),
            column2.querySelector(".clients__logo-column-inner-1"),
          ],
          { y: 0, opacity: 1 }
        );
        gsap.set(sectionRef.current.querySelector(".clients__logo-container"), {
          clearProps: "pointerEvents",
        });
      };

      const leaveAnimation = () => {
        sectionRef.current.classList.remove("clients__intro--columns-shown");
        sectionRef.current.classList.add("clients__intro--at-end");
        gsap.set(column1.querySelector(".clients__logo-column-inner-1"), {
          y: "-110%",
          opacity: 0,
        });

        gsap.set(column2.querySelector(".clients__logo-column-inner-1"), {
          y: "110%",
          opacity: 0,
        });
        gsap.set(sectionRef.current.querySelector(".clients__logo-container"), {
          pointerEvents: "none",
        });
      };

      resetColumns();

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: () => `top-=${paddingBottom + 200}px top`,
        end: () => `bottom+=${paddingTop}px bottom`,
        scrub: true,
        onEnter: enterAnimation,
        onEnterBack: enterAnimation,
        onLeave: leaveAnimation,
        onLeaveBack: resetColumns,
      });
    };

    const media = gsap.matchMedia();
    media.add("(min-width: 1024px)", setupAnimation);

    return () => {
      media.revert();
    };
  }, [prevSection, nextSection]);

  return (
    <section
      className="content-wrapper flex flex-row-reverse justify-start py-40 client-height relative"
      ref={snapScroll}
    >
      <div
        className="flex  justify-start relative items-center"
        data-scroll-snap="center"
        data-scroll-snap-offset="7vh"
        ref={sectionRef}
      >
        <div className="client-wrap ms-20">
          <SectionHead
            subTitle="Our clients"
            title={
              <>
                We are <span>partners</span> in their projects
              </>
            }
          />
          <p className="mt-5 text-3xl text-white leading-10">
            Whether it's to operate their payroll, select their next HRIS,
            optimize their processes or recruit their new Paymaster, they've
            called on our services and we're proud to have contributed to their
            success.
          </p>
        </div>
      </div>
      <div className="clients__logo-container space-x-8 ">
        <div className="clients__logo-column --1 " ref={column1Ref}>
          <div className="clients__logo-column-inner-1">
            <div className="clients__logo-column-inner-2 ">
              <ClientCard
                className="clients-card-scroll"
                img={client1}
              ></ClientCard>
              <ClientCard
                className="clients-card-scroll"
                img={client2}
              ></ClientCard>
              <ClientCard
                className="clients-card-scroll"
                img={client3}
              ></ClientCard>
              <ClientCard
                className="clients-card-scroll"
                img={client4}
              ></ClientCard>
              <ClientCard
                className="clients-card-scroll"
                img={client5}
              ></ClientCard>
            </div>
          </div>
        </div>
        <div className="clients__logo-column --2" ref={column2Ref}>
          <div className="clients__logo-column-inner-1">
            <div className="clients__logo-column-inner-2 ">
              <ClientCard
                className="clients-card-scroll"
                img={client6}
              ></ClientCard>
              <ClientCard
                className="clients-card-scroll"
                img={client7}
              ></ClientCard>
              <ClientCard
                className="clients-card-scroll"
                img={client8}
              ></ClientCard>
              <ClientCard
                className="clients-card-scroll"
                img={client9}
              ></ClientCard>
              <ClientCard
                className="clients-card-scroll"
                img={client10}
              ></ClientCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
