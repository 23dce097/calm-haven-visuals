import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import particlesBackground from "@/assets/particles-background.jpg";

export const CallToAction = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${particlesBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-transparent to-background/80" />
      
      {/* Animated Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full blur-sm wave-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full blur-3xl opacity-30 float-animation" style={{ background: 'var(--gradient-cta)' }} />
        <div className="absolute bottom-1/4 right-1/5 w-48 h-48 rounded-full blur-3xl opacity-20 float-animation" style={{ background: 'var(--gradient-hero)', animationDelay: '4s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/30 flex items-center justify-center pulse-glow">
            <Sparkles className="h-10 w-10 text-primary" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="block">Start a</span>
          <span className="block gradient-text">kinder rhythm</span>
          <span className="block">with yourself</span>
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Create small restorative moments that compound into emotional
          steadiness. It begins with one gentle check-in.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="btn-cta group text-lg">
            Begin Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="btn-peaceful text-lg">
            Use Demo First
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/20">
          <p className="text-muted-foreground/80 text-sm">
            ✨ No credit card required • 🔒 Privacy-first approach • 🎯 Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};