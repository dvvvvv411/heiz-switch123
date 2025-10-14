
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Thermometer, Shield, Info } from 'lucide-react';

const StorageRecommendations = () => {
  const generalTips = [
    {
      icon: Thermometer,
      title: 'Temperatur',
      description: 'Lagerung zwischen -10°C und +40°C für optimale Qualität'
    },
    {
      icon: Shield,
      title: 'Behälterschutz',
      description: 'Verwendung von korrosionsbeständigen Tanks aus Stahl oder Kunststoff'
    },
    {
      icon: Info,
      title: 'Füllstand',
      description: 'Tank möglichst vollhalten um Kondensation zu vermeiden'
    },
    {
      icon: AlertTriangle,
      title: 'Wartung',
      description: 'Regelmäßige Kontrolle auf Undichtigkeiten und Verschmutzungen'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Lagerungsempfehlungen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Optimale Lagerung für maximale Qualität und Langlebigkeit Ihres Heizöls.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {generalTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{tip.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Tabs defaultValue="standard" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="standard">Standard Heizöl</TabsTrigger>
              <TabsTrigger value="premium">Premium Heizöl</TabsTrigger>
            </TabsList>
            
            <TabsContent value="standard">
              <Card>
                <CardHeader>
                  <CardTitle>Standard Heizöl - Lagerungshinweise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Lagerdauer</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Optimale Lagerdauer: bis zu 6 Monate</li>
                        <li>• Nach 6 Monaten: Qualitätsprüfung empfohlen</li>
                        <li>• Längere Lagerung: Stabilisatoren hinzufügen</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Wartungsintervalle</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Monatliche Sichtkontrolle</li>
                        <li>• Halbjährliche Tankreinigung</li>
                        <li>• Jährliche Qualitätsprüfung</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-yellow-800">Wichtiger Hinweis</h5>
                        <p className="text-yellow-700 text-sm mt-1">
                          Bei längerer Lagerung können sich Sedimente bilden. 
                          Eine regelmäßige Kontrolle ist daher empfehlenswert.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="premium">
              <Card>
                <CardHeader>
                  <CardTitle>Premium Heizöl - Lagerungshinweise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Lagerdauer</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Optimale Lagerdauer: bis zu 12+ Monate</li>
                        <li>• Antioxidantien schützen vor Alterung</li>
                        <li>• Biozid-Schutz verhindert Mikroorganismen</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Wartungsintervalle</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Vierteljährliche Sichtkontrolle</li>
                        <li>• Jährliche Tankreinigung</li>
                        <li>• Qualitätsprüfung nach Bedarf</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-green-800">Premium Vorteile</h5>
                        <p className="text-green-700 text-sm mt-1">
                          Dank der Additive ist Premium Heizöl deutlich länger lagerfähig 
                          und benötigt weniger Wartungsaufwand.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default StorageRecommendations;
