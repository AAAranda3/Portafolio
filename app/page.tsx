import AboutSection from "@/app/about/page";
import SectionDivider
 from "@/components/section-divider";
export default function Home() {
  return (
    <>
      <AboutSection />
      <div className="flex justify-center">
        <SectionDivider />
      </div>
    </>
  );
}
