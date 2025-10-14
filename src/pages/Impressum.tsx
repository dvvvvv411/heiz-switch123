import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Phone, Mail, MapPin } from 'lucide-react';
import { useBranding } from '@/contexts/BrandingContext';

const Impressum = () => {
  const { branding } = useBranding();
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Impressum</h1>
            <p className="text-xl text-gray-600">
              Angaben gemäß § 5 TMG
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="mr-2 text-primary-600" size={24} />
                  Firmeninformationen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-900">Firma:</h3>
                  <p className="text-gray-700">{branding?.companyName || "HILL-Clear Projects GmbH"}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Rechtsform:</h3>
                  <p className="text-gray-700">Gesellschaft mit beschränkter Haftung</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Handelsregister:</h3>
                  <p className="text-gray-700">HRB 267211</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Registergericht:</h3>
                  <p className="text-gray-700">Amtsgericht München</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">USt-IdNr.:</h3>
                  <p className="text-gray-700">DE970703271</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 text-primary-600" size={24} />
                  Kontaktdaten
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-primary-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Anschrift:</h3>
                    <p className="text-gray-700">
                      {branding?.companyName || "HILL-Clear Projects GmbH"}<br />
                      {branding?.addressStreet || "Rottmannstr. 22a"}<br />
                      {branding?.addressCity || "80333 München"}<br />
                      Deutschland
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary-600" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefon:</h3>
                    <p className="text-gray-700">{branding?.phone || "089 244 189 180"}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary-600" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">E-Mail:</h3>
                    <p className="text-gray-700">{branding?.email || "info@hill-heizoel.de"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle>Geschäftsführung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{branding?.managingDirector || "Michael Hillmann"}</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle>Haftungsausschluss</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Haftung für Inhalte</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Haftung für Links</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Urheberrecht</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Streitschlichtung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" className="text-primary-600 hover:text-primary-700 ml-1" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br /><br />
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Impressum;
