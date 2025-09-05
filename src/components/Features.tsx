import { Heart, TrendingUp, BarChart3, Compass, MessageCircle, Route } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Daily Check-ins",
    description: "Gentle reflections that help you notice patterns and name emotions.",
    category: "Emotional Awareness"
  },
  {
    icon: TrendingUp,
    title: "Insights & Progress",
    description: "See mood trends, energy balance, and resilience markers over time.",
    category: "Emotional Awareness"
  },
  {
    icon: BarChart3,
    title: "Growth Metrics",
    description: "Track streaks, stability ranges, and emotional variability safely.",
    category: "Emotional Awareness"
  },
  {
    icon: Compass,
    title: "Guided Exercises",
    description: "Mindfulness, breathing, grounding and cognitive reframing when you need them.",
    category: "Guided Support"
  },
  {
    icon: MessageCircle,
    title: "AI Support",
    description: "Warm, adaptive AI companion offering coping tools and gentle nudges.",
    category: "Guided Support"
  },
  {
    icon: Route,
    title: "Personal Pathways",
    description: "Adaptive journeys that unfold based on your goals and comfort level.",
    category: "Guided Support"
  }
];

const trustFeatures = [
  {
    icon: "🔒",
    title: "Private & Secure",
    description: "Zero third-party sharing. Local-first mindset with encryption layers."
  },
  {
    icon: "📊",
    title: "Data Transparency",
    description: "Clear control over what's stored. Delete or export anytime."
  },
  {
    icon: "✨",
    title: "Personalization Ethic",
    description: "Adaptive—not invasive. You choose what to teach the system."
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--primary))_1px,_transparent_0)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Everything you need for{" "}
            <span className="gradient-text">gentle progress</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Designed with clinicians & crafted with warmth—tools that meet you where you are
            and evolve as you do.
          </p>
        </div>

        {/* Emotional Awareness Features */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-full" />
            </div>
            Emotional Awareness
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.filter(f => f.category === "Emotional Awareness").map((feature, index) => (
              <div
                key={feature.title}
                className="feature-card ring-animation group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">{feature.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guided Support Features */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <div className="w-4 h-4 bg-accent rounded-full" />
            </div>
            Guided Support
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.filter(f => f.category === "Guided Support").map((feature, index) => (
              <div
                key={feature.title}
                className="feature-card ring-animation group"
                style={{ animationDelay: `${(index + 3) * 0.2}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold">{feature.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety & Trust Section */}
        <div className="mt-32">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-destructive/20 flex items-center justify-center">
              <div className="w-4 h-4 bg-destructive rounded-full" />
            </div>
            Safety & Trust
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {trustFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="feature-card ring-animation group text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};