import { useRef } from "react";
import Blob from "./components/Blob/blob";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import JobSection from "./components/JobSection/JobSection";
import PayHR from "./components/PayHR/PayHR";
import SubmissionSection from "./components/SubmissionSection/SubmissionSection";

const App = () => {
  // Create refs for JobSection and SubmissionSection
  // const jobSectionRef = useRef(null);
  // const submissionSectionRef = useRef(null);
  return (
    <>
      <div className="page-bg"></div>

      <div className="home relative">
        <Header></Header>
        <Blob></Blob>
        <Hero></Hero>
        <PayHR></PayHR>
        <JobSection></JobSection>
        {
          // <Clients
          //   prevSection={jobSectionRef}
          //   nextSection={submissionSectionRef}
          // ></Clients>
        }
        <SubmissionSection></SubmissionSection>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
