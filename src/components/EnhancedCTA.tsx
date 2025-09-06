import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, Shield, Zap } from "lucide-react";

export const EnhancedCTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 rounded-full blur-3xl opacity-20 float-animation" style={{ background: 'var(--gradient-cta)' }} />
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full blur-3xl opacity-15 float-animation" style={{ background: 'var(--gradient-hero)', animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-2xl opacity-10 float-animation" style={{ background: 'var(--gradient-breathing)', animationDelay: '7s' }} />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full blur-sm wave-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Icon with 3D Effect */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/30 flex items-center justify-center pulse-glow group-hover:scale-110 transition-all duration-300">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
            {/* Floating micro-icons */}
            <Heart className="absolute -top-2 -right-2 h-6 w-6 text-accent float-animation" style={{ animationDelay: '2s' }} />
            <Shield className="absolute -bottom-2 -left-2 h-6 w-6 text-primary-glow float-animation" style={{ animationDelay: '4s' }} />
            <Zap className="absolute -top-2 -left-2 h-6 w-6 text-primary float-animation" style={{ animationDelay: '6s' }} />
          </div>
        </div>

        {/* Enhanced Heading with Text Effects */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight">
          <span className="block text-hover">Start a</span>
          <span className="block gradient-text text-hover">kinder rhythm</span>
          <span className="block text-hover">with yourself</span>
        </h2>

        {/* Enhanced Description */}
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
          Create small restorative moments that compound into emotional
          steadiness. It begins with one gentle check-in.
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
          <Button className="btn-cta group text-lg px-10 py-6 relative overflow-hidden">
            <span className="relative z-10">Begin Your Journey</span>
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
          <Button variant="outline" className="btn-peaceful text-lg px-8 py-6 group relative">
            <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
            <span>Try Demo First</span>
          </Button>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Heart, text: "No credit card required" },
            { icon: Shield, text: "Privacy-first approach" },
            { icon: Zap, text: "Cancel anytime" }
          ].map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/20 text-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-muted-foreground/90 text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground/70 mb-4">
            Trusted by thousands of users worldwide
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};