import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  onScrollToFeatures?: () => void;
  onScrollToHowItWorks?: () => void;
  onScrollToTestimonials?: () => void;
  onScrollToPricing?: () => void;
  onScrollToContact?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onScrollToFeatures,
  onScrollToHowItWorks,
  onScrollToTestimonials,
  onScrollToPricing,
  onScrollToContact
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartTrial = () => {
    window.location.href = "https://app.kabini.ai";
  };

  const handleSignIn = () => {
    window.location.href = "https://app.kabini.ai";
  };

  const navItems = [
    { label: 'Features', onClick: onScrollToFeatures },
    { label: 'How It Works', onClick: onScrollToHowItWorks },
    { label: 'Testimonials', onClick: onScrollToTestimonials },
    { label: 'Pricing', onClick: onScrollToPricing },
    { label: 'Contact', onClick: onScrollToContact },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              kabini.ai
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleSignIn}
              className="text-muted-foreground hover:text-foreground"
            >
              Sign In
            </Button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={handleStartTrial}
              className="group"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    item.onClick?.();
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    handleSignIn();
                    setIsMenuOpen(false);
                  }}
                  className="w-full justify-start text-muted-foreground hover:text-foreground"
                >
                  Sign In
                </Button>
                <Button 
                  variant="hero" 
                  size="sm"
                  onClick={() => {
                    handleStartTrial();
                    setIsMenuOpen(false);
                  }}
                  className="w-full group"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
