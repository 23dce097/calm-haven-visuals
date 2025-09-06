import { Hero } from "@/components/Hero";
import { EnhancedFeatures } from "@/components/EnhancedFeatures";
import { EnhancedTestimonials } from "@/components/EnhancedTestimonials";
import { EnhancedCTA } from "@/components/EnhancedCTA";
import { Footer } from "@/components/Footer";
import { PeacefulBackground } from "@/components/PeacefulBackground";

const Index = () => {
  return (
    <>
      <PeacefulBackground />
      <main className="relative z-10">
        <Hero />
        <EnhancedFeatures />
        <EnhancedTestimonials />
        <EnhancedCTA />
        <Footer />
      </main>
    </>
  );
};

export default Index;
