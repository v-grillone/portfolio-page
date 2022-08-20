import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import ReachOut from "./components/ReachOut";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <Project1 />
      <Project2 />
      <Project3 />
      <ReachOut />
    </div>
  );
}

export default App;
