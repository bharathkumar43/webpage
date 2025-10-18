import { Button } from "@/components/ui/button";
import { Zap, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const ShoppingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { name: "Solutions", href: "solutions" },
    { name: "How It Works", href: "how-it-works" },
    { name: "Why Choose Us", href: "why-choose" },
    { name: "FAQ", href: "faq" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-md">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-blue-500/30 blur-lg -z-10 transition-all duration-300 group-hover:blur-xl"></div>
            </div>
            <span className="text-2xl font-bold text-blue-600">
              Kabini.ai
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Platform dropdown */}
            <div className="relative group">
              <a
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center gap-1"
              >
                Platform
                <ChevronDown className="w-4 h-4" />
              </a>
              <div className="absolute top-full left-0 mt-2 w-56 rounded-lg border border-gray-200 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a href="/shopping" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">Shopping</a>
                </div>
              </div>
            </div>

            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://app.kabini.ai"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Sign In
            </a>
            <Button 
              size="sm"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300"
              asChild
            >
              <a href="https://app.kabini.ai">Get Free AI Audit</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {/* Platform and nested items for mobile */}
              <div>
                <a
                  href="/"
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Platform
                </a>
                <div className="pl-4 space-y-1">
                  <a href="/shopping" className="block text-gray-600 hover:text-blue-600 py-1.5 text-sm" onClick={() => setIsMenuOpen(false)}>Shopping</a>
                </div>
              </div>

              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300 w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a 
                  href="https://app.kabini.ai"
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </a>
                <Button 
                  size="sm"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition-colors duration-300"
                  asChild
                >
                  <a href="https://app.kabini.ai" onClick={() => setIsMenuOpen(false)}>Get Free AI Audit</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default ShoppingHeader;
