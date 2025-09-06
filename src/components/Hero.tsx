import { Brain, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import brainIcon from "@/assets/brain-icon.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Peaceful Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5" />
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-primary/20 rounded-full blur-2xl float-animation" />
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-accent/25 rounded-full blur-xl float-animation" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary-glow/15 rounded-full blur-3xl float-animation" style={{ animationDelay: '6s' }} />
        
        {/* Orbiting Elements */}
        <div className="absolute top-1/3 left-1/2 w-8 h-8 bg-primary/40 rounded-full orbit-animation" />
        <div className="absolute top-2/3 left-1/3 w-6 h-6 bg-accent/50 rounded-full orbit-animation" style={{ animationDelay: '10s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
        {/* Enhanced Brand Badge with Breathing Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Breathing Background Animation */}
            <div className="absolute inset-0 animate-breathe-slow">
              <div className="w-full h-full bg-primary/10 rounded-3xl blur-xl scale-110" />
            </div>
            <div className="absolute inset-0 animate-breathe-medium">
              <div className="w-full h-full bg-accent/15 rounded-2xl blur-lg scale-105" />
            </div>
            
            {/* Main Badge */}
            <div className="relative flex items-center gap-4 px-8 py-4 rounded-3xl bg-card/80 backdrop-blur-md border border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden group">
                {/* Breathing Ring Animation */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl animate-breathe-pulse opacity-60" />
                
                <img 
                  src={brainIcon} 
                  alt="MindMate Brain Icon" 
                  className="w-full h-full object-cover rounded-2xl relative z-10 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20 rounded-2xl" />
              </div>
              <span className="text-sm font-semibold text-foreground/80 tracking-[0.2em] hover:text-primary transition-colors">
                YOUR SPACE. YOUR PACE.
              </span>
            </div>
          </div>
        </div>

        {/* Hero Title with Hover Effects */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight select-none">
          <span className="block gradient-text hover-text-effect transition-all duration-500 cursor-default">
            A calming AI space
          </span>
          <span className="block text-foreground hover-text-effect-secondary transition-all duration-500 cursor-default hover:text-primary/80">
            for daily
          </span>
          <span className="block gradient-text hover-text-effect transition-all duration-500 cursor-default">
            emotional care
          </span>
        </h1>

        {/* Hero Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          MindMate helps you slow down, notice, and gently regulate—through
          reflective check-ins, mindful micro-tools, and a supportive AI companion
          that adapts without judging.
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="btn-hero group text-lg relative overflow-hidden">
            <span className="relative z-10">Enter the Space</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
          <Button variant="outline" className="btn-peaceful text-lg group relative">
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>Watch Demo</span>
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