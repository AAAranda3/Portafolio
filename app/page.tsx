import AboutSection from "@/app/about/page";
import SectionDivider
  from "@/components/section-divider";
import SkillsPage from "./skills/page";
import SectionDivider2 from "@/components/section-divider-2";
import ExperiencePage from "./experience/page";
import { ProjectsPage } from "./projects/page";
export default function Home() {
  return (
    <>
      <AboutSection />
      <SkillsPage />
      <ExperiencePage/>
      <ProjectsPage/>
    </>
  );
}
