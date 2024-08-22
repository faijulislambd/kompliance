import Blob from "./components/Blob/blob";
import Clients from "./components/Clients/Clients";
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
        <Clients></Clients>
      </div>
    </>
  );
};

export default App;
