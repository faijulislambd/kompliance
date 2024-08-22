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
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  useAnimation,
} from "framer-motion";
import { ScrollTrigger } from "gsap/all";

const Clients = () => {
  const sectionRef = useRef(null);
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        controls1.start({ y: `${100 * progress}%` });
        controls2.start({ y: `${-100 * progress}%` });
      },
      markers: true, // Optional: remove or set to false in production
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [controls1, controls2]);
  return (
    <section
      className="content-wrapper flex justify-end py-40 client-heigh relative"
      ref={sectionRef}
    >
      <div className="flex justify-end relative items-center">
        <div className="client-wrap">
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
      <div className="absolute left-0 top-0 flex space-x-8 ">
        <AnimatePresence>
          <motion.div
            className="flex flex-col gap-y-5"
            animate={controls1}
            ref={column1Ref}
          >
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
          </motion.div>
          <motion.div
            className="flex flex-col gap-y-5"
            animate={controls2}
            ref={column2Ref}
          >
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Clients;
