import { Quote, Star, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "MindMate turned self-care from something I avoided into a daily micro-ritual that actually feels kind.",
    author: "Ava Chen",
    role: "Early Beta Member",
    rating: 5,
    avatar: "AC"
  },
  {
    quote: "The tone is so gentle. I've begun to notice emotions earlier instead of after I crash.",
    author: "Rohan Patel",
    role: "Graduate Student",
    rating: 5,
    avatar: "RP"
  },
  {
    quote: "It doesn't judge. The breathing prompts + check-ins lowered my morning anxiety in 2 weeks.",
    author: "Mia Rodriguez",
    role: "UX Designer",
    rating: 5,
    avatar: "MR"
  }
];

export const EnhancedTestimonials = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/8 w-96 h-96 bg-primary/8 rounded-full blur-3xl float-animation opacity-60" />
        <div className="absolute bottom-1/4 right-1/8 w-80 h-80 bg-accent/8 rounded-full blur-3xl float-animation opacity-40" style={{ animationDelay: '4s' }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-primary-glow/6 rounded-full blur-2xl float-animation" style={{ animationDelay: '7s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 mb-8">
            <Quote className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground tracking-wider">
              COMMUNITY VOICES
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-hover">Quiet encouragement from</span>
            <span className="block gradient-text text-hover">early users</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real reflections on calmer routines, clarity, and self-kindness.
          </p>
        </div>

        {/* Testimonials Grid with 3D Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="feature-card group border-0 text-left"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transform: `perspective(1000px) rotateY(${index % 2 === 0 ? '2deg' : '-2deg'})`
              }}
            >
              <CardContent className="p-8">
                {/* Quote Icon with 3D Effect */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Quote className="h-7 w-7 text-primary" />
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Quote with Enhanced Typography */}
                <blockquote className="text-lg md:text-xl leading-relaxed mb-8 text-foreground/90 font-medium">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Section with Avatar */}
                <footer className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center font-bold text-sm text-primary">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-hover">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </footer>

                {/* 3D Gradient Line */}
                <div className="mt-6 h-1 w-full bg-gradient-to-r from-primary/40 via-accent/40 to-transparent rounded-full transform group-hover:scale-105 transition-transform duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 mt-16">
          {[
            { number: "10k+", label: "Active Users" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 text-hover">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};