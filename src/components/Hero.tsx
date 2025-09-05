import { Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import brainIcon from "@/assets/brain-icon.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full blur-sm animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl float-animation" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/15 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-primary-glow/5 rounded-full blur-2xl float-animation" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Brand Badge */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-animation">
              <img 
                src={brainIcon} 
                alt="MindMate Brain Icon" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
            <span className="text-sm font-medium text-muted-foreground tracking-wider">
              YOUR SPACE. YOUR PACE.
            </span>
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="block gradient-text">A calming AI space</span>
          <span className="block text-foreground">for daily</span>
          <span className="block gradient-text">emotional care</span>
        </h1>

        {/* Hero Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          MindMate helps you slow down, notice, and gently regulate—through
          reflective check-ins, mindful micro-tools, and a supportive AI companion
          that adapts without judging.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="btn-hero group text-lg">
            Enter the Space
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="btn-peaceful text-lg">
            Explore Features
          </Button>
        </div>

        {/* Demo Info */}
        <div className="mt-12 text-sm text-muted-foreground/70">
          <p>Demo: demo@mindmate.test / Password123!</p>
          <p className="mt-1">No judgments. Your reflections stay private.</p>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};