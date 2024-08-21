import Blob from "./components/Blob/blob";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <div className="page-bg"></div>
      <Header></Header>
      <Blob></Blob>
      <Hero></Hero>
    </>
  );
};

export default App;
