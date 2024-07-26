import Contact from "./contact";
import Experience from "./experience";
import HightIntro from "./hight_intro";
import Intro from "./intro";
import Skills from "./skills";
import Work from "./work";

const About = () => {
  return (
    <div className="">
      <Intro />
      <HightIntro />
      <Skills />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
};
export default About;
