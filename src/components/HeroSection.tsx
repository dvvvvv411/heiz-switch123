
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PriceCalculator from './PriceCalculator';
import MobilePriceCalculator from './MobilePriceCalculator';
import ClickToCall from './ClickToCall';

const HeroSection = () => {
  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('price-calculator');
    calculatorElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23006b51' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-12 lg:pb-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-2 lg:px-4 bg-accent-orange-100 text-accent-orange-700 rounded-full text-sm font-medium">
                🔥 Heizöl-Experte seit über 20 Jahren
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
                Heizöl günstig
                <br />
                <span className="text-primary-600">bestellen</span>
                <br />
                Deutschlandweit
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 max-w-lg">
                Kostenlose Lieferung in Deutschland • <span className="text-accent-orange-600 font-semibold">Ab 70 Cent pro Liter</span> • Schnell & zuverlässig
              </p>
            </div>

            {/* USPs */}
            <div className="space-y-3">
              {[
                { text: 'Kostenlose Lieferung in Deutschland ab 1500 Liter', highlight: true },
                { text: 'Lieferung innerhalb 4-7 Werktagen', highlight: false },
                { text: 'Geprüfte Premium-Qualität', highlight: false },
                { text: 'Über 100.000 zufriedene Kunden', highlight: true }
              ].map((usp, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className={`flex-shrink-0 ${usp.highlight ? 'text-accent-orange-500' : 'text-primary-600'}`} size={18} />
                  <span className="text-gray-700 font-medium text-sm lg:text-base">{usp.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToCalculator}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                Preis berechnen
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <a href="tel:089244189180">
                <Button 
                  variant="outline" 
                  className="border-accent-orange-500 text-accent-orange-600 hover:bg-accent-orange-50 hover:border-accent-orange-600 px-8 py-4 text-lg font-semibold"
                >
                  089 244 189 180
                </Button>
              </a>
            </div>

            {/* CTA Buttons - Mobile */}
            <div className="lg:hidden space-y-4">
              <Button 
                onClick={scrollToCalculator}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 text-lg font-semibold min-h-[48px]"
              >
                Preis berechnen
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 lg:pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Vertrauen Sie auf über 20 Jahre Erfahrung</p>
              <div className="grid grid-cols-3 gap-4 lg:flex lg:items-center lg:space-x-8">
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-accent-orange-600">100.000+</div>
                  <div className="text-xs lg:text-sm text-gray-500">Zufriedene Kunden</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-primary-600">20+</div>
                  <div className="text-xs lg:text-sm text-gray-500">Jahre Erfahrung</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-accent-orange-600">24h</div>
                  <div className="text-xs lg:text-sm text-gray-500">Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Price Calculators */}
          <div className="animated-slide-up">
            <div id="price-calculator">
              {/* Desktop Calculator */}
              <div className="hidden lg:block">
                <PriceCalculator />
              </div>
              {/* Mobile Calculator */}
              <div className="lg:hidden">
                <MobilePriceCalculator />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
