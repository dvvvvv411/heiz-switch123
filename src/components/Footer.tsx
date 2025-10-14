
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBranding } from '@/contexts/BrandingContext';

const Footer = () => {
  const { branding } = useBranding();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={branding?.logoUrl || "/lovable-uploads/a242d3e4-8d70-4fc0-8cab-947043c42574.png"} 
              alt={branding?.companyName || "HILL-Heizöl"} 
              className="h-20"
            />
            <p className="text-gray-300 leading-relaxed">
              Ihr zuverlässiger Partner für Heizöl in Bayern seit über 20 Jahren. 
              Qualität, Service und faire Preise.
            </p>
            <div>
              <div className="font-semibold">{branding?.companyName || "HILL-Clear Projects GmbH"}</div>
              <div className="text-sm text-gray-400">Bayern's Heizöl-Experte</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-accent-orange-400 transition-colors">Home</Link></li>
              <li><Link to="/produkte" className="hover:text-accent-orange-400 transition-colors">Produkte</Link></li>
              <li><Link to="/services" className="hover:text-accent-orange-400 transition-colors">Services</Link></li>
              <li><Link to="/ueber-uns" className="hover:text-accent-orange-400 transition-colors">Über uns</Link></li>
              <li><Link to="/agb" className="hover:text-accent-orange-400 transition-colors">AGB</Link></li>
              <li><Link to="/datenschutz" className="hover:text-accent-orange-400 transition-colors">Datenschutz</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-accent-orange-400" />
                <span>{branding?.phone || "089 244 189 180"}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <span>{branding?.email || "info@hill-heizoel.de"}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-accent-orange-400 mt-1" />
                <div>
                  <div>{branding?.addressStreet || "Rottmannstr. 22a"}</div>
                  <div>{branding?.addressCity || "80333 München"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Öffnungszeiten</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-primary-400" />
                <span>Service-Hotline</span>
              </div>
              <div className="space-y-1 text-sm">
                <div>Mo - Fr: 08:00 - 18:00</div>
                <div>Sa: 09:00 - 14:00</div>
                <div>So: Notfall-Hotline</div>
              </div>
              <div className="mt-4 p-3 bg-accent-orange-900 rounded-lg border border-accent-orange-700">
                <div className="text-sm font-semibold text-accent-orange-400 mb-1">
                  24/7 Notfall-Service
                </div>
                <div className="text-xs text-gray-300">
                  Bei Heizungsausfällen erreichen Sie uns rund um die Uhr
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 {branding?.companyName || "HILL-Clear Projects GmbH"}. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <Link to="/impressum" className="hover:text-accent-orange-400 transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-accent-orange-400 transition-colors">Datenschutz</Link>
              <Link to="/agb" className="hover:text-accent-orange-400 transition-colors">AGB</Link>
              <Link to="/widerrufsrecht" className="hover:text-accent-orange-400 transition-colors">Widerrufsrecht</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
