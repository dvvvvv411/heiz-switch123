
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Truck, Bell, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const QualityAssuranceSection = () => {
  const qualityFeatures = [
    {
      icon: Truck,
      title: 'TÜV-geprüfte Tankwagen',
      description: 'Alle unsere Fahrzeuge werden regelmäßig vom TÜV geprüft',
      details: [
        'Jährliche TÜV-Hauptuntersuchung',
        'Monatliche Sicherheitschecks',
        'Zertifizierte Tankwagen-Ausrüstung',
        'Umweltschutz-Zertifizierung'
      ]
    },
    {
      icon: Shield,
      title: 'Qualitätskontrolle',
      description: 'Lückenlose Qualitätskontrolle vom Einkauf bis zur Lieferung',
      details: [
        'Laboranalyse jeder Heizölcharge',
        'DIN EN 590 Konformitätsprüfung',
        'Kontinuierliche Qualitätsüberwachung',
        'Rückverfolgbarkeit aller Lieferungen'
      ]
    },
    {
      icon: Bell,
      title: 'Lieferprotokoll',
      description: 'Detaillierte Dokumentation jeder Lieferung',
      details: [
        'Digitales Lieferprotokoll vor Ort',
        'Mengenangabe und Qualitätsnachweis',
        'Unterschrift per Tablet',
        'Sofortiger E-Mail-Versand'
      ]
    },
    {
      icon: Phone,
      title: 'Kundenservice-Hotline',
      description: '24/7 erreichbarer Kundenservice für alle Anliegen',
      details: [
        'Kostenlose Service-Hotline',
        'Geschulte Fachberater',
        'Schnelle Problemlösung',
        'Beschwerdemanagement'
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Qualitätssicherung
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Höchste Qualitäts- und Sicherheitsstandards bei jeder Lieferung. 
            Vertrauen Sie auf unsere geprüften Prozesse und zertifizierten Services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {qualityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-green-800">ISO 9001:2015</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-green-700">
                Zertifiziertes Qualitätsmanagementsystem für höchste Standards
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-blue-800">TÜV-Zertifiziert</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-700">
                Alle Fahrzeuge und Anlagen sind TÜV-geprüft und zertifiziert
              </p>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-purple-800">24/7 Service</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-purple-700">
                Rund um die Uhr erreichbarer Kundenservice und Notfall-Hotline
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Qualitätsgarantie</h3>
            <p className="text-primary-100 mb-6">
              Wir garantieren Ihnen höchste Qualität bei jeder Lieferung. 
              Bei Problemen sorgen wir umgehend für eine Lösung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/produkte">
                <Button variant="outline" className="bg-white text-primary-600 hover:bg-gray-50">
                  Qualitätszertifikate ansehen
                </Button>
              </Link>
              <a href="tel:089244189180">
                <Button variant="outline" className="bg-white text-primary-600 hover:bg-gray-50">
                  Kundenservice kontaktieren
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssuranceSection;
