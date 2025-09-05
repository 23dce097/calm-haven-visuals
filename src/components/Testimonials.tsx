import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "MindMate turned self-care from something I avoided into a daily micro-ritual that actually feels kind.",
    author: "Ava",
    role: "Early Beta Member",
    icon: "~"
  },
  {
    quote: "The tone is so gentle. I've begun to notice emotions earlier instead of after I crash.",
    author: "Rohan",
    role: "Student",
    icon: "~"
  },
  {
    quote: "It doesn't judge. The breathing prompts + check-ins lowered my morning anxiety in 2 weeks.",
    author: "Mia",
    role: "Designer",
    icon: "~"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-96 h-96 bg-primary/5 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-accent/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Quiet encouragement from{" "}
            <span className="gradient-text">early users</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real reflections on calmer routines, clarity, and self-kindness.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Quote className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl text-primary/50 font-mono">{testimonial.icon}</div>
              </div>

              {/* Quote */}
              <blockquote className="text-lg leading-relaxed mb-6 text-foreground/90">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-3">
                <div className="w-1 h-12 bg-gradient-to-b from-primary to-accent rounded-full" />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};