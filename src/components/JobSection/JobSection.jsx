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
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".cardStack");
      cards.forEach((card, i) => {
        if (i === 0) {
          // Pin the first card and allow other cards to scroll over it
          ScrollTrigger.create({
            trigger: card,
            start: "center center",
            endTrigger: cards[cards.length - 1], // Pin until the last card
            end: "bottom center",
            pin: true,
            pinSpacing: false, // Prevent extra spacing during pinning
            markers: false,
          });
        }
      });
    },
    { scope: cardContainer }
  );

  return (
    <section>
      <div className="content-wrapper">
        <div className="flex flex-wrap relative" ref={cardContainer}>
          <div className="job-section">
            <SectionHead></SectionHead>
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
          <div className="absolute right-0">
            <Card className="cardStack"></Card>
            <Card className="cardStack"></Card>
            <Card className="cardStack"></Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSection;
