import { useGSAP } from "@gsap/react";
import Button from "../../utils/Button/Button";
import SectionHead from "../../utils/SectionHead/SectionHead";
import Card from "./Card/Card";
import "./JobSection.css";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import useScrollSnap from "../../hooks/useScrollSnap";

const JobSection = () => {
  const scrollSnapRef = useScrollSnap();
  const cardContainer = useRef();
  const jobSectionRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1024;
      const homeJobsElements = document.querySelectorAll(".home-jobs");

      homeJobsElements.forEach(() => {
        const featuredSticky = document.querySelector(
          ".home-jobs__featured-sticky"
        );
        const introductionSticky = document.querySelector(
          ".home-jobs__introduction-sticky"
        );

        if (isDesktop) {
          if (introductionSticky) {
            featuredSticky.style.height = `${introductionSticky.clientHeight}px`;
          }
        } else {
          featuredSticky.style.height = "";
        }
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: jobSectionRef.current,
          start: "top 30%",
          end: "bottom bottom",
          scrub: 5, // Slower scrub value for smoother animation
        },
      });

      document.querySelectorAll(".cardStack").forEach((card, index) => {
        timeline.fromTo(
          card,
          { y: "100vh" },
          {
            y: "0",
            ease: "power3.inOut",
            duration: 1.5, // Ensure this duration is applied
          },
          index * 0.4 // Adjust the overlap between cards
        );
      });
    }, jobSectionRef);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="home-jobs" ref={scrollSnapRef}>
      <div className="job-min-height">
        <div className="content-wrapper py-40">
          <div className="flex flex-wrap items-center relative job-min-height">
            <div
              className="job-section home-jobs__introduction-sticky flex items-center"
              data-scroll-snap="center"
              ref={jobSectionRef}
            >
              <div className="job-mt">
                <SectionHead
                  subTitle="Current job openings"
                  title={
                    <>
                      Several <span>opportunities</span>
                      <br /> are waiting for you
                    </>
                  }
                ></SectionHead>
                <p className="mt-5 text-3xl text-white leading-10">
                  We support both organizations looking to fill a position
                  within their Payroll and HRIS team, and candidates looking for
                  a new professional challenge. So, whether you're just starting
                  out or have a successful career behind you, our job offers are
                  just waiting for your resume.
                </p>
                <div className="mt-5">
                  <Button text="View all offers"></Button>
                </div>
                <p className="mt-5">&nbsp;</p>
              </div>
            </div>
            <div className="cards-container">
              <div
                className="home-jobs__featured-sticky relative"
                data-scroll-snap="center"
              >
                <Card className="cardStack" badge="One Card"></Card>
                <Card className="cardStack" badge="Two Card"></Card>
                <Card className="cardStack" badge="Three Card"></Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSection;
