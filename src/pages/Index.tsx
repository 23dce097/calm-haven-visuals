import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
    </>
  );
};

export default Index;
