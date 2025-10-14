
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Truck, CreditCard, AlertTriangle } from 'lucide-react';

const AGB = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Allgemeine Geschäftsbedingungen</h1>
            <p className="text-xl text-gray-600">
              Gültig ab 01.01.2024 für HILL-Clear Projects GmbH
            </p>
          </div>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 text-primary-600" size={24} />
                Geltungsbereich
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed">
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Lieferungen und Leistungen der HILL-Clear Projects GmbH, Rottmannstr. 22a, 80333 München (nachfolgend "Verkäufer" genannt) an Verbraucher und Unternehmer (nachfolgend "Kunden" genannt). Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Verkäufer stimmt ihrer Geltung ausdrücklich schriftlich zu.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle>Vertragsschluss</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700 text-sm leading-relaxed">
                Die Präsentation der Waren in unserem Online-Shop stellt kein rechtlich bindendes Angebot, sondern einen unverbindlichen Online-Katalog dar. Sie können das Produkt zunächst unverbindlich in den Warenkorb legen und Ihre Eingaben vor Absenden Ihrer verbindlichen Bestellung jederzeit korrigieren.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Der Vertrag kommt zustande, wenn wir Ihre Bestellung durch eine Bestellbestätigung per E-Mail annehmen oder die Ware liefern.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="mr-2 text-primary-600" size={24} />
                Preise und Zahlungsbedingungen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700 text-sm leading-relaxed">
                Alle Preise sind Endpreise und enthalten die gesetzliche Mehrwertsteuer. Zusätzliche Liefer- und Versandkosten werden Ihnen auf der Produktseite, im Warenkorb und auf der Bestellseite mitgeteilt.
              </p>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Zahlungsarten:</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Barzahlung bei Lieferung</li>
                  <li>• Überweisung (Vorkasse)</li>
                  <li>• Lastschrift (nur bei Stammkunden)</li>
                  <li>• Rechnung (nur bei Firmenkunden nach Prüfung)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="mr-2 text-primary-600" size={24} />
                Lieferung
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Liefergebiet</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Wir liefern innerhalb Deutschlands.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Lieferzeit</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Die Lieferzeit beträgt in der Regel 1-3 Werktage. Express-Lieferungen sind nach Absprache möglich.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Mindestbestellmenge</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Die Mindestbestellmenge beträgt 500 Liter. Bei geringeren Mengen behalten wir uns vor, einen Mindermengenzuschlag zu erheben.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Zugangsvoraussetzungen</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Der Kunde hat sicherzustellen, dass die Zufahrt zum Tankstutzen mit einem Tankfahrzeug möglich ist. Die Schlauchleitung beträgt maximal 50 Meter.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 text-primary-600" size={24} />
                Gewährleistung und Haftung
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700 text-sm leading-relaxed">
                Wir gewährleisten die Qualität unserer Produkte nach den gesetzlichen Bestimmungen. Bei Mängeln ist zunächst die Nacherfüllung durch Nachbesserung oder Nachlieferung vorgesehen.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Unsere Haftung ist beschränkt auf Vorsatz und grobe Fahrlässigkeit, außer bei der Verletzung von Leben, Körper und Gesundheit sowie bei der Verletzung wesentlicher Vertragspflichten.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle>Eigentumsvorbehalt</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed">
                Die gelieferte Ware bleibt bis zur vollständigen Bezahlung aller Forderungen aus der Geschäftsbeziehung unser Eigentum.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Schlussbestimmungen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700 text-sm leading-relaxed">
                Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist München, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AGB;
