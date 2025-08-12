import { Zap, Mail, Phone, Facebook, Linkedin, Github, Youtube } from "lucide-react";
import { forwardRef, useCallback } from "react";

const Footer = forwardRef<HTMLDivElement>((_, ref) => {
  // Smooth scroll handler for footer links
  const handleSmoothScroll = useCallback((id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <footer ref={ref} className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">kabini.ai</span>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Supercharge your site. Get noticed. Transform your content with AI-powered 
              optimization and generative engine technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="X (formerly Twitter)">
                <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5"><path d="M19.615 14.438 28.125 4h-2.13l-7.5 9.023L12.02 4H4.5l9.01 13.29L4.5 28h2.13l8.01-9.637L19.98 28h7.52l-9.885-13.562Zm-2.84 3.418-.93-1.32L6.14 5.5h4.89l6.13 8.693.93 1.32 9.705 13.787h-4.89l-6.13-8.693Z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="mailto:contact@kabini.ai" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" onClick={handleSmoothScroll('features')} className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" onClick={handleSmoothScroll('how-it-works')} className="text-muted-foreground hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#pricing" onClick={handleSmoothScroll('pricing')} className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#testimonials" onClick={handleSmoothScroll('testimonials')} className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/documentation" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="/help-center" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="/community" className="text-muted-foreground hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">contact@kabini.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="font-medium text-foreground mb-2">Business Hours</h5>
              <p className="text-muted-foreground text-sm">
                Mon-Fri, 9am-6pm PST<br />
                24/7 chat support
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 kabini.ai. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="/terms-and-conditions" className="text-muted-foreground hover:text-primary transition-colors">Terms and Conditions</a>
            <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
