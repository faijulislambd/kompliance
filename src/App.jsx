import Blob from "./components/Blob/blob";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import JobSection from "./components/JobSection/JobSection";
import PayHR from "./components/PayHR/PayHR";

const App = () => {
  return (
    <>
      <div className="page-bg"></div>

      <div className="home relative">
        <Header></Header>
        <Blob></Blob>
        <Hero></Hero>
        <PayHR></PayHR>
        <JobSection></JobSection>
      </div>
    </>
  );
};

export default App;
