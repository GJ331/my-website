import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Works from "./components/Work/Work";
import ProjectsExp from "./components/ProjectsExp/ProjectsExp";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-mainBg overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Works />
      <ProjectsExp />
      <Footer />
    </div>
  );
};

export default App;
