import { Button } from "@/components/ui/button";
import { Zap, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-50/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl blur-lg opacity-30 animate-pulse"></div>
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Kabini.ai
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group text-sm xl:text-base"
              >
                {item.name}
                {/* Hover underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 text-sm xl:text-base"
              asChild
            >
              <a href="https://app.kabini.ai">Sign In</a>
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-sm xl:text-base"
              asChild
            >
              <a href="https://app.kabini.ai">Start Free Trial</a>
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
          <div className="lg:hidden bg-gray-50/95 backdrop-blur-md border-t border-gray-200/50 shadow-lg">
            <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 sm:py-3 transition-colors duration-300 text-base sm:text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 sm:pt-4 border-t border-blue-200/50 space-y-2 sm:space-y-3">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium text-base sm:text-lg py-2 sm:py-3"
                  asChild
                >
                  <a href="https://app.kabini.ai">Sign In</a>
                </Button>
                <Button 
                  size="sm"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium shadow-lg text-base sm:text-lg py-2 sm:py-3"
                  asChild
                >
                  <a href="https://app.kabini.ai">Start Free Trial</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;