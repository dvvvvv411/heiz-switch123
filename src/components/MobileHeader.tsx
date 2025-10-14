
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useBranding } from '@/contexts/BrandingContext';

const MobileHeader = () => {
  const { branding } = useBranding();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 lg:hidden">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img 
              src={branding?.logoUrl || "/lovable-uploads/a242d3e4-8d70-4fc0-8cab-947043c42574.png"} 
              alt={branding?.companyName || "HILL-Heizöl"} 
              className="h-16"
            />
          </Link>

          {/* Quick Actions */}
          <div className="flex items-center space-x-2">
            <a
              href={`tel:${branding?.phone?.replace(/\s/g, '') || '089244189180'}`}
              className="p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Anrufen"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={toggleMenu}
              className="p-2 border border-gray-300 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
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
              className="block py-3 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/produkte" 
              className="block py-3 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg font-medium"
              onClick={toggleMenu}
            >
              Produkte
            </Link>
            <Link 
              to="/services" 
              className="block py-3 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg font-medium"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/ueber-uns" 
              className="block py-3 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg font-medium"
              onClick={toggleMenu}
            >
              Über uns
            </Link>
            
            {/* Contact Actions */}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <a
                href={`tel:${branding?.phone?.replace(/\s/g, '') || '089244189180'}`}
                className="flex items-center py-3 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors min-h-[48px]"
              >
                <Phone size={20} className="mr-3" />
                <span className="font-medium">{branding?.phone || "089 244 189 180"}</span>
              </a>
              <a
                href={`mailto:${branding?.email || 'info@hill-clear.de'}`}
                className="flex items-center py-3 px-4 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors min-h-[48px]"
              >
                <Mail size={20} className="mr-3" />
                <span className="font-medium">{branding?.email || "info@hill-clear.de"}</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
