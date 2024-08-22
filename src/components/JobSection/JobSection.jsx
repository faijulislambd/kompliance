import { useGSAP } from "@gsap/react";
import Button from "../../utils/Button/Button";
import SectionHead from "../../utils/SectionHead/SectionHead";
import Card from "./Card/Card";
import "./JobSection.css";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const JobSection = () => {
  const cardContainer = useRef();
  const jobSectionRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".cardStack").reverse();

    // Pin the container until the last card is in view
    ScrollTrigger.create({
      trigger: cardContainer.current,
      start: "center center",
      end: `+=${cards.length * 100}%`,
      pin: cardContainer.current,
      pinSpacing: true,
      scrub: true,
      markers: false,
    });

    // Overlapping effect for each card
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 150, autoAlpha: 0 },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: card,
            start: () => `top +=${i * 100}%`, // Stagger the start of each animation
            end: () => `+=${(cards.length - 1) * 100}%`, // Adjust end based on remaining cards
            scrub: true,
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <section>
      <div className="content-wrapper  py-40">
        <div className="flex flex-wrap " ref={cardContainer}>
          <div className="job-section" ref={jobSectionRef}>
            <div>
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
                We support both organizations looking to fill a position within
                their Payroll and HRIS team, and candidates looking for a new
                professional challenge. So, whether you're just starting out or
                have a successful career behind you, our job offers are just
                waiting for your resume.
              </p>
              <div className="mt-5">
                <Button text="View all offers"></Button>
              </div>
              <p className="mt-5">&nbsp;</p>
            </div>
          </div>
          <div className="cards-container">
            <Card className="cardStack" badge="One Card"></Card>
            <Card className="cardStack" badge="Two Card"></Card>
            <Card className="cardStack" badge="Three Card"></Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSection;
