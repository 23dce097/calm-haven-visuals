import { Heart, TrendingUp, BarChart3, Compass, MessageCircle, Route, Shield, Database, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Heart,
    title: "Daily Check-ins",
    description: "Gentle reflections that help you notice patterns and name emotions.",
    category: "Emotional Awareness",
    color: "primary"
  },
  {
    icon: TrendingUp,
    title: "Insights & Progress",
    description: "See mood trends, energy balance, and resilience markers over time.",
    category: "Emotional Awareness",
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Growth Metrics",
    description: "Track streaks, stability ranges, and emotional variability safely.",
    category: "Emotional Awareness",
    color: "primary"
  },
  {
    icon: Compass,
    title: "Guided Exercises",
    description: "Mindfulness, breathing, grounding and cognitive reframing when you need them.",
    category: "Guided Support",
    color: "accent"
  },
  {
    icon: MessageCircle,
    title: "AI Support",
    description: "Warm, adaptive AI companion offering coping tools and gentle nudges.",
    category: "Guided Support",
    color: "accent"
  },
  {
    icon: Route,
    title: "Personal Pathways",
    description: "Adaptive journeys that unfold based on your goals and comfort level.",
    category: "Guided Support",
    color: "accent"
  }
];

const trustFeatures = [
  {
    icon: Shield,
    title: "Private & Secure",
    description: "Zero third-party sharing. Local-first mindset with encryption layers.",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Database,
    title: "Data Transparency",
    description: "Clear control over what's stored. Delete or export anytime.",
    gradient: "from-accent/20 to-accent/5"
  },
  {
    icon: Sparkles,
    title: "Personalization Ethic",
    description: "Adaptive—not invasive. You choose what to teach the system.",
    gradient: "from-primary-glow/20 to-primary-glow/5"
  }
];

export const EnhancedFeatures = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-primary/10 rounded-full blur-3xl float-animation opacity-60" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-accent/10 rounded-full blur-3xl float-animation opacity-40" style={{ animationDelay: '3s' }} />
        <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-primary-glow/8 rounded-full blur-2xl float-animation" style={{ animationDelay: '6s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 mb-8">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground tracking-wider">
              COMPREHENSIVE WELLNESS TOOLS
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-hover">Everything you need for</span>
            <span className="block gradient-text text-hover">gentle progress</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Designed with clinicians & crafted with warmth—tools that meet you where you are
            and evolve as you do.
          </p>
        </div>

        {/* Emotional Awareness Features */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
              <div className="w-6 h-6 bg-primary rounded-xl" />
            </div>
            <h3 className="text-3xl font-bold text-hover">Emotional Awareness</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.filter(f => f.category === "Emotional Awareness").map((feature, index) => (
              <Card
                key={feature.title}
                className="feature-card group border-0"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-hover">{feature.title}</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                  
                  {/* 3D Accent Line */}
                  <div className="mt-6 h-1 w-full bg-gradient-to-r from-primary/50 to-transparent rounded-full transform group-hover:scale-105 transition-transform duration-300" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Guided Support Features */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
              <div className="w-6 h-6 bg-accent rounded-xl" />
            </div>
            <h3 className="text-3xl font-bold text-hover">Guided Support</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.filter(f => f.category === "Guided Support").map((feature, index) => (
              <Card
                key={feature.title}
                className="feature-card group border-0"
                style={{ animationDelay: `${(index + 3) * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 rounded-3xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="text-xl font-bold text-hover">{feature.title}</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                  
                  {/* 3D Accent Line */}
                  <div className="mt-6 h-1 w-full bg-gradient-to-r from-accent/50 to-transparent rounded-full transform group-hover:scale-105 transition-transform duration-300" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety & Trust Section with 3D Layout */}
        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 mb-8">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground tracking-wider">
                SAFETY & TRUST FIRST
              </span>
            </div>
            <h3 className="text-4xl font-bold gradient-text text-hover mb-4">Built on Trust</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 perspective-1000">
            {trustFeatures.map((feature, index) => (
              <Card
                key={feature.title}
                className="feature-card group border-0 text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-10">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <feature.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-hover">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                  
                  {/* 3D Bottom Border */}
                  <div className="mt-8 h-2 w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full transform group-hover:scale-105 transition-transform duration-300" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};