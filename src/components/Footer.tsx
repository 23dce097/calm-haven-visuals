import { Heart, Brain, Sparkles, Mail, Github, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-20 px-6 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl float-animation" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold gradient-text">MindMate</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6 max-w-md">
              Your gentle companion for emotional wellness. Creating peaceful moments 
              that lead to lasting well-being.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Mail, href: "mailto:hello@mindmate.app", label: "Email" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-hover">Quick Links</h3>
            <ul className="space-y-4">
              {["Features", "Testimonials", "Pricing", "Demo"].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-hover"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-hover">Support</h3>
            <ul className="space-y-4">
              {["Help Center", "Privacy Policy", "Terms of Service", "Contact"].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-hover"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-primary fill-primary" />
              <span>for your well-being</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>© 2024 MindMate. All rights reserved.</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-8 left-8 w-4 h-4 bg-primary/30 rounded-full blur-sm float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-12 right-12 w-3 h-3 bg-accent/40 rounded-full blur-sm float-animation" style={{ animationDelay: '5s' }} />
        <div className="absolute bottom-6 right-1/3 w-2 h-2 bg-primary-glow/50 rounded-full blur-sm float-animation" style={{ animationDelay: '8s' }} />
      </div>
    </footer>
  );
};