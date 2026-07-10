import HeroBadge from "./HeroBadge";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import AnimatedSection from "@/components/shared/animations/AnimatedSection";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-stone-50 pb-16 lg:pb-0">
  <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

    <AnimatedSection>
      <div>
        <HeroBadge />

        <div className="mt-8">
          <HeroContent />
        </div>

        <HeroStats />
      </div>
    </AnimatedSection>

    <AnimatedSection delay={0.2}>
      <HeroImage />
    </AnimatedSection>

  </div>
</section>
  );
}