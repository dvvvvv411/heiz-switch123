import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Map, Clock, Bell, Phone } from 'lucide-react';
import { scrollToCalculatorFromOtherPage } from '../utils/scrollToCalculator';

const DeliveryServiceSection = () => {
  const deliveryFeatures = [
    {
      icon: Truck,
      title: 'Kostenlose Lieferung',
      description: 'In ganz Deutschland ab 1500 Liter Mindestbestellmenge',
      details: 'Keine versteckten Kosten - der angezeigte Preis ist der Endpreis'
    },
    {
      icon: Clock,
      title: 'Flexible Lieferzeiten',
      description: 'Lieferung Mo-Fr 7:00-17:00 Uhr, Sa 8:00-12:00 Uhr',
      details: 'Wunschtermin nach telefonischer Absprache möglich'
    },
    {
      icon: Map,
      title: 'Liefergebiet Deutschland',
      description: 'Flächendeckende Belieferung in ganz Deutschland',
      details: 'Optimierte Routen für schnelle und umweltschonende Lieferung'
    },
    {
      icon: Bell,
      title: 'Lieferankündigung',
      description: 'SMS oder Anruf 30-60 Minuten vor Lieferung',
      details: 'Sie sind immer über den Lieferstatus informiert'
    }
  ];

  const tankwagenFeatures = [
    'Moderne, TÜV-geprüfte Tankwagen',
    'Geeichte Zählwerke für exakte Mengenerfassung',
    'Lange Schläuche bis zu 50 Meter',
    'Umweltschutz durch Tropfschutz und Auffangwannen',
    'Geschulte und zertifizierte Fahrer'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Unser Lieferservice
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Zuverlässige und termingerechte Heizöllieferung direkt zu Ihnen nach Hause. 
            Kostenlos in ganz Deutschland ab 1500 Liter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {deliveryFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{feature.description}</p>
                  <p className="text-sm text-gray-500">{feature.details}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-6 h-6 text-primary-600" />
                Tankwagen-Ausstattung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {tankwagenFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="w-6 h-6 text-primary-600" />
                Liefergebiet & Zeiten
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Liefergebiet</h4>
                  <p className="text-sm text-gray-600">
                    Ganz Deutschland - von München bis Nürnberg, von Augsburg bis Regensburg
                  </p>
                </div>
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Lieferzeiten</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Montag - Freitag: 7:00 - 17:00 Uhr</p>
                    <p>Samstag: 8:00 - 12:00 Uhr</p>
                    <p>Sonntag: Nach Vereinbarung</p>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800">Mindestbestellmenge</h4>
                  <p className="text-sm text-green-700">
                    <strong>1500 Liter</strong> für kostenlose Lieferung
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={scrollToCalculatorFromOtherPage}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3"
          >
            Lieferung beauftragen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeliveryServiceSection;
