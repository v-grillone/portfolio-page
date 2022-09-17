import { useRef, useEffect, useState } from "react";

import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Projects from "./components/Projects";
import ReachOut from "./components/ReachOut";

function App() {

  const [isMenuActive, setIsMenuActive] = useState({
    about: false,
    project1: false,
    project2: false,
    project3: false,
    reachOut: false
  })

  const aboutSectionRef = useRef()
  const project1SectionRef = useRef()
  const project2SectionRef = useRef()
  const project3SectionRef = useRef()
  const reachOutSectionRef = useRef()

  let sectionsObserverOptions = {
    rootMargin: '0px',
    threshold: 0.30
  }

  useEffect(() => {
    const sections = [aboutSectionRef, project1SectionRef, project2SectionRef, project3SectionRef, reachOutSectionRef]
    const defaultMenuActive = {
      about: false,
      project1: false,
      project2: false,
      project3: false,
      reachOut: false
    }
    const sectionsObserver = new IntersectionObserver((entries) => {
      const activeSection = Array.from(entries[0].target.classList) 
      if(activeSection.indexOf('about-section') >= 0 && entries[0].isIntersecting){
        const currentMenuActive = {...defaultMenuActive, about: true}
        setIsMenuActive(currentMenuActive);
      }else if(activeSection.indexOf('project1-section') >= 0 && entries[0].isIntersecting){
        const currentMenuActive = {...defaultMenuActive, project1: true}
        setIsMenuActive(currentMenuActive);
      }else if(activeSection.indexOf('project2-section') >= 0 && entries[0].isIntersecting){
        const currentMenuActive = {...defaultMenuActive, project2: true}
        setIsMenuActive(currentMenuActive);
      }else if(activeSection.indexOf('project3-section') >= 0 && entries[0].isIntersecting){
        const currentMenuActive = {...defaultMenuActive, project3: true}
        setIsMenuActive(currentMenuActive);
      }else if(activeSection.indexOf('reach-out-section') >= 0 && entries[0].isIntersecting){
        const currentMenuActive = {...defaultMenuActive, reachOut: true}
        setIsMenuActive(currentMenuActive);
      }
    }, sectionsObserverOptions)
    sections.forEach(section => sectionsObserver.observe(section.current));
  }, [])

  return (
    <div className="App">
      <Navigation menuActive={isMenuActive} />
      <HeroSection />
      <AboutSection aboutRef={aboutSectionRef} />
      {/* < Projects project1Ref={project1SectionRef} project2Ref={project2SectionRef} project3Ref={project3SectionRef} /> */}
      <Project1 project1Ref={project1SectionRef}  />
      <Project2 project2Ref={project2SectionRef} />
      <Project3 project3Ref={project3SectionRef} />
      <ReachOut reachOutRef={reachOutSectionRef} />
    </div>
  );
}

export default App;
