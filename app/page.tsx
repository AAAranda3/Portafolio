import AboutSection from "@/app/about/page";
import SectionDivider
  from "@/components/section-divider";
import SkillsPage from "./skills/page";
import SectionDivider2 from "@/components/section-divider-2";
export default function Home() {
  return (
    <>
      <AboutSection />
      <SectionDivider2 />
      <SkillsPage />
    </>
  );
}
