import AnimatedSection from "./AnimatedSection" // Import the AnimatedSection component
import InteractiveSkills from "./InteractiveSkills" // Import the InteractiveSkills component

// 포트폴리오의 스킬 섹션을 이것으로 교체 가능:

{
  /* Skills Section - Interactive Version */
}
;<section id="skills" className="container py-16 md:py-24">
  <AnimatedSection className="mx-auto max-w-6xl">
    <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">Skills</h2>
    <InteractiveSkills />
  </AnimatedSection>
</section>
