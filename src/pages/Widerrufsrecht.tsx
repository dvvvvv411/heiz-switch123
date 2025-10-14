import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RotateCcw, Clock, FileText, AlertCircle } from 'lucide-react';
import { useBranding } from '@/contexts/BrandingContext';

const Widerrufsrecht = () => {
  const { branding } = useBranding();
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Widerrufsrecht</h1>
            <p className="text-xl text-gray-600">
              Informationen über Ihr gesetzliches Widerrufsrecht
            </p>
          </div>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <RotateCcw className="mr-2 text-primary-600" size={24} />
                Widerrufsrecht für Verbraucher
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed font-semibold mb-4">
                Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 text-primary-600" size={24} />
                Widerruf erklären
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                Um Ihr Widerrufsrecht auszuüben, müssen Sie uns ({branding?.companyName || "HILL-Clear Projects GmbH"}, {branding?.addressStreet || "Rottmannstr. 22a"}, {branding?.addressCity || "80333 München"}, E-Mail: {branding?.email || "info@hill-heizoel.de"}, Tel.: {branding?.phone || "089 244 189 180"}) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
              </p>
              
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Kontakt für Widerruf:</h3>
                <div className="space-y-1 text-gray-700 text-sm">
                  <p><span className="font-semibold">Adresse:</span> {branding?.companyName || "HILL-Clear Projects GmbH"}, {branding?.addressStreet || "Rottmannstr. 22a"}, {branding?.addressCity || "80333 München"}</p>
                  <p><span className="font-semibold">E-Mail:</span> {branding?.email || "info@hill-heizoel.de"}</p>
                  <p><span className="font-semibold">Telefon:</span> {branding?.phone || "089 244 189 180"}</p>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 text-primary-600" size={24} />
                Folgen des Widerrufs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700 text-sm leading-relaxed">
                Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle>Rückgabe der Waren</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed">
                Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mt-3">
                Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="mr-2 text-amber-500" size={24} />
                Besondere Hinweise für Heizöl
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="text-gray-700 text-sm leading-relaxed font-semibold mb-2">
                  Wichtiger Hinweis:
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die nach Kundenspezifikation angefertigt werden oder eindeutig auf die persönlichen Bedürfnisse zugeschnitten sind oder die aufgrund ihrer Beschaffenheit nicht für eine Rücksendung geeignet sind.
                </p>
              </div>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                Bei bereits erfolgter Belieferung und Betankung ist ein Widerruf nur möglich, wenn das Heizöl noch nicht verbraucht wurde und eine vollständige Rückführung möglich ist. In diesem Fall trägt der Kunde die Kosten für die Rückholung.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Muster-Widerrufsformular</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg border">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück:
                </p>
                
                <div className="space-y-4 text-gray-700 text-sm">
                  <p>An: {branding?.companyName || "HILL-Clear Projects GmbH"}, {branding?.addressStreet || "Rottmannstr. 22a"}, {branding?.addressCity || "80333 München"}, E-Mail: {branding?.email || "info@hill-heizoel.de"}</p>
                  
                  <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*):</p>
                  
                  <p>_____________________________________________</p>
                  
                  <p>Bestellt am (*) / erhalten am (*):</p>
                  
                  <p>_____________________________________________</p>
                  
                  <p>Name des/der Verbraucher(s):</p>
                  
                  <p>_____________________________________________</p>
                  
                  <p>Anschrift des/der Verbraucher(s):</p>
                  
                  <p>_____________________________________________</p>
                  
                  <p>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):</p>
                  
                  <p>_____________________________________________</p>
                  
                  <p>Datum:</p>
                  
                  <p>_____________________________________________</p>
                  
                  <p className="text-xs mt-4">(*) Unzutreffendes streichen.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Widerrufsrecht;
