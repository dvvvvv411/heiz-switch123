import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Database } from 'lucide-react';

const Datenschutz = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Datenschutzerklärung</h1>
            <p className="text-xl text-gray-600">
              Informationen zum Umgang mit Ihren personenbezogenen Daten
            </p>
          </div>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 text-primary-600" size={24} />
                Verantwortlicher
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-semibold">HILL-Clear Projects GmbH</p>
                <p>Rottmannstr. 22a</p>
                <p>80333 München</p>
                <p>Deutschland</p>
                <p className="mt-4">
                  <span className="font-semibold">E-Mail:</span> info@hill-heizoel.de<br />
                  <span className="font-semibold">Telefon:</span> 089 244 189 180
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2 text-primary-600" size={24} />
                Erhebung und Speicherung personenbezogener Daten
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Beim Besuch der Website</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Bei Kontaktaufnahme</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Bei Ihrer Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail oder Telefon) werden die von Ihnen gemachten Angaben zum Zwecke der Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Bei Bestellungen</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Zur Abwicklung Ihrer Bestellung benötigen wir von Ihnen Name, Anschrift, Telefonnummer, E-Mail-Adresse und Zahlungsdaten. Diese Daten werden nur zur Vertragserfüllung verwendet.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="mr-2 text-primary-600" size={24} />
                Zweck der Datenverarbeitung
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Bereitstellung der Website und deren Funktionalitäten</li>
                <li>• Gewährleistung der Systemsicherheit und -stabilität</li>
                <li>• Zur Optimierung unserer Website</li>
                <li>• Bearbeitung von Anfragen und Kundenservice</li>
                <li>• Abwicklung von Bestellungen</li>
                <li>• Rechnungsstellung und Zahlungsabwicklung</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="mr-2 text-primary-600" size={24} />
                Rechtsgrundlage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed">
                Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage der gesetzlichen Bestimmungen der DSGVO:
              </p>
              <ul className="mt-3 space-y-2 text-gray-700 text-sm">
                <li>• Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                <li>• Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
                <li>• Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle>Speicherdauer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed">
                Wir löschen Ihre personenbezogenen Daten, sobald sie für die oben genannten Zwecke nicht mehr erforderlich sind. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle>Ihre Rechte</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Recht auf Auskunft</li>
                <li>• Recht auf Berichtigung oder Löschung</li>
                <li>• Recht auf Einschränkung der Verarbeitung</li>
                <li>• Recht auf Widerspruch gegen die Verarbeitung</li>
                <li>• Recht auf Datenübertragbarkeit</li>
                <li>• Beschwerderecht bei einer Aufsichtsbehörde</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Kontakt</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed">
                Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte kontaktieren Sie uns unter:
              </p>
              <div className="mt-3 space-y-1 text-gray-700 text-sm">
                <p><span className="font-semibold">E-Mail:</span> info@hill-heizoel.de</p>
                <p><span className="font-semibold">Telefon:</span> 089 244 189 180</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Datenschutz;
