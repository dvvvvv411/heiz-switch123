
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Bell, Map } from 'lucide-react';
import { scrollToCalculatorFromOtherPage } from '../utils/scrollToCalculator';

const ServiceContact = () => {
  const contactOptions = [
    {
      icon: Phone,
      title: 'Service-Hotline',
      info: '089 244 189 180',
      description: 'Kostenlose Beratung und Bestellannahme',
      availability: 'Mo-Fr 7:00-18:00, Sa 8:00-12:00'
    },
    {
      icon: Bell,
      title: 'Online-Service',
      info: 'service@hill-clear.de',
      description: 'E-Mail-Anfragen und Online-Bestellung',
      availability: 'Antwort innerhalb 2 Stunden'
    },
    {
      icon: Map,
      title: 'Vor-Ort-Beratung',
      info: 'Kostenloser Hausbesuch',
      description: 'Persönliche Beratung bei Ihnen zu Hause',
      availability: 'Nach Terminvereinbarung'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Service & Kontakt
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wir sind für Sie da! Kontaktieren Sie uns für Beratung, Bestellung oder bei Fragen 
            rund um unsere Services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary-600 mb-2">{option.info}</p>
                  <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                  <p className="text-xs text-gray-500">{option.availability}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToCalculatorFromOtherPage}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3"
            >
              Jetzt bestellen
            </Button>
            <a href="tel:089244189180">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
                Kostenlose Beratung
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContact;
