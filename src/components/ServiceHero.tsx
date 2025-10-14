
import { Button } from "@/components/ui/button";
import { Truck, Clock, Shield } from 'lucide-react';
import { scrollToCalculatorFromOtherPage } from '../utils/scrollToCalculator';

const ServiceHero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unser Service für Sie
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Zuverlässige Lieferung, kompetente Beratung und erstklassiger Service 
            rund um Ihre Heizölversorgung in ganz Deutschland.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kostenlose Lieferung</h3>
              <p className="text-gray-600">In ganz Deutschland ab 1500 Liter</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Lieferzeiten</h3>
              <p className="text-gray-600">Termingerechte Zustellung nach Wunsch</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">TÜV-Geprüft</h3>
              <p className="text-gray-600">Höchste Qualitäts- und Sicherheitsstandards</p>
            </div>
          </div>
          
          <div className="mt-12">
            <Button 
              onClick={scrollToCalculatorFromOtherPage}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 text-lg"
            >
              Jetzt Service anfragen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
