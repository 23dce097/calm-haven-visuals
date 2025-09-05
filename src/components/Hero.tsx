import { Brain, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import brainIcon from "@/assets/brain-icon.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Peaceful Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card opacity-90 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source
            src="data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAr1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE2NCByMzA5NSBiYTUxOTQyIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAyMSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAg"
            type="video/mp4"
          />
        </video>
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