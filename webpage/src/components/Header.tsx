import { Button } from "@/components/ui/button";
import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" }
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

            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
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
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile-only links */}

              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
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
                  <a href="https://app.kabini.ai" onClick={() => setIsMenuOpen(false)}>Start Free Trial</a>
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