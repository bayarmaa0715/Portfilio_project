import Contact from "@/components/about/contact";
import Experience from "@/components/about/experience";
import HightIntro from "@/components/about/hight_intro";
import Intro from "@/components/about/intro";
import Skills from "@/components/about/skills";
import Work from "@/components/about/work";

export default function Home() {
  return (
    <main>
      <Intro />
      <HightIntro />
      <Skills />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}
