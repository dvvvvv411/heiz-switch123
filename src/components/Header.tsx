
import { useState } from 'react';
import { Menu, X, Phone, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import ClickToCall from './ClickToCall';
import { scrollToCalculator, scrollToCalculatorFromOtherPage } from '../utils/scrollToCalculator';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleOrderClick = () => {
    if (isHomePage) {
      scrollToCalculator();
    } else {
      scrollToCalculatorFromOtherPage();
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 hidden lg:block">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="border-b border-gray-100 py-2">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <div className="flex items-center space-x-6">
                <ClickToCall variant="header" />
                <div className="flex items-center space-x-2">
                  <Bell size={14} className="text-accent-orange-500" />
                  <span>info@hill-heizoel.de</span>
                </div>
              </div>
              <div className="text-accent-orange-500 font-medium">
                Kostenlose Lieferung in Deutschland
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/a242d3e4-8d70-4fc0-8cab-947043c42574.png" 
                alt="HILL-Heizöl" 
                className="h-20"
              />
            </Link>

            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-accent-orange-500 transition-colors font-medium">
                Startseite
              </Link>
              <Link to="/produkte" className="text-gray-700 hover:text-accent-orange-500 transition-colors font-medium">
                Produkte
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-accent-orange-500 transition-colors font-medium">
                Services
              </Link>
              <Link to="/ueber-uns" className="text-gray-700 hover:text-accent-orange-500 transition-colors font-medium">
                Über uns
              </Link>
              <Button 
                onClick={handleOrderClick}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6"
              >
                Jetzt bestellen
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 lg:hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex-1"></div>
            
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/a242d3e4-8d70-4fc0-8cab-947043c42574.png" 
                alt="HILL-Heizöl" 
                className="h-18"
              />
            </Link>

            <div className="flex-1 flex justify-end">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 border border-gray-300 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center hover:border-accent-orange-500 transition-colors"
                aria-label="Menü öffnen"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}>
            <nav className="space-y-1">
              <Link 
                to="/" 
                className="block py-3 px-4 text-gray-700 hover:bg-accent-orange-50 hover:text-accent-orange-600 transition-colors rounded-lg font-medium min-h-[48px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Startseite
              </Link>
              <Link 
                to="/produkte" 
                className="block py-3 px-4 text-gray-700 hover:bg-accent-orange-50 hover:text-accent-orange-600 transition-colors rounded-lg font-medium min-h-[48px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Produkte
              </Link>
              <Link 
                to="/services" 
                className="block py-3 px-4 text-gray-700 hover:bg-accent-orange-50 hover:text-accent-orange-600 transition-colors rounded-lg font-medium min-h-[48px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/ueber-uns" 
                className="block py-3 px-4 text-gray-700 hover:bg-accent-orange-50 hover:text-accent-orange-600 transition-colors rounded-lg font-medium min-h-[48px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </Link>
              
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
