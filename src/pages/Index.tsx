import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { SimpleBackground } from "@/components/SimpleBackground";

const Index = () => {
  return (
    <>
      <SimpleBackground />
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
