import AboutSection from "@/app/about/page";
import SkillsPage from "./skills/page";
import ExperiencePage from "./experience/page";
import ProjectsPage from "./projects/page";
import AboutMeSection from "./aboutme/page";
export default function Home() {
  return (
    <>
      <section id="about">
        <AboutSection />
      </section>

      <section id="about-me">
        <AboutMeSection />
      </section>

      <section id="skills">
        <SkillsPage />
      </section>

      <section id="experience">
        <ExperiencePage />
      </section>

      <section id="projects">
        <ProjectsPage />
      </section>
    </>
  );
}
