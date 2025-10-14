
import { useState, useEffect } from 'react';
import { Building, Users, Award, Clock, MapPin, Shield, CheckCircle, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  const [animatedStats, setAnimatedStats] = useState({
    years: 0,
    customers: 0,
    rating: 0,
    deliveries: 0
  });

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      const targets = {
        years: 21,
        customers: 100000,
        rating: 4.9,
        deliveries: 200000
      };

      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          years: Math.floor(targets.years * progress),
          customers: Math.floor(targets.customers * progress),
          rating: Math.floor((targets.rating * progress) * 10) / 10,
          deliveries: Math.floor(targets.deliveries * progress)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats(targets);
        }
      }, stepDuration);
      
      return () => clearInterval(timer);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const certifications = [
    {
      name: "ISO 9001",
      description: "Qualitätsmanagement-System"
    },
    {
      name: "DIN SPEC 51603-1",
      description: "Premium-Heizöl Standard"
    },
    {
      name: "WHG Zertifikat",
      description: "Wasserhaushaltsgesetz konform"
    },
    {
      name: "ADR Zertifikat",
      description: "Gefahrgut-Transport Lizenz"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Über HILL-Clear Projects GmbH
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Seit über 20 Jahren Ihr zuverlässiger Partner für Premium-Heizöl in Deutschland. 
            Qualität, Service und faire Preise sind unser Versprechen an Sie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:089244189180">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                <Phone className="mr-2" size={20} />
                089 244 189 180
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
              <Mail className="mr-2" size={20} />
              info@hill-heizoel.de
            </Button>
          </div>
        </div>
      </section>

      {/* Animated Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {animatedStats.years}+
              </div>
              <div className="text-gray-600">Jahre Erfahrung</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {animatedStats.customers.toLocaleString()}+
              </div>
              <div className="text-gray-600">Zufriedene Kunden</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {animatedStats.rating}★
              </div>
              <div className="text-gray-600">Kundenbewertung</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {animatedStats.deliveries.toLocaleString()}+
              </div>
              <div className="text-gray-600">Lieferungen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Unsere Geschichte
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Im Jahr 2003 wurde HILL-Clear Projects GmbH mit dem Ziel gegründet, 
                  Kunden in Deutschland mit hochwertigem Heizöl zu fairen Preisen zu versorgen. 
                  Was als kleines Familienunternehmen begann, hat sich zu einem der 
                  führenden Heizöl-Anbieter in der Region entwickelt.
                </p>
                <p>
                  Unser Erfolg basiert auf drei Säulen: erstklassige Produktqualität, 
                  zuverlässiger Service und transparente Preisgestaltung. Wir beliefern 
                  sowohl Privatkunden als auch Gewerbekunden und setzen dabei auf 
                  modernste Logistik und persönliche Betreuung.
                </p>
                <p>
                  Mit über 100.000 zufriedenen Kunden und mehr als 200.000 erfolgreichen 
                  Lieferungen haben wir uns das Vertrauen der Menschen in Deutschland verdient. 
                  Unser Team aus erfahrenen Fachkräften steht Ihnen jederzeit mit Rat 
                  und Tat zur Seite.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-12 text-white text-center shadow-2xl">
                <Building size={80} className="mx-auto mb-6 text-primary-100" />
                <h3 className="text-3xl font-bold mb-4">HILL-Clear</h3>
                <p className="text-xl text-primary-100 mb-6">Projects GmbH</p>
                <div className="space-y-2 text-primary-100">
                  <p>Seit 2003 in München</p>
                  <p>Bayern's Heizöl-Experte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Warum Heizöl von HILL-Clear wählen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir bieten Ihnen mehr als nur Heizöl - wir bieten Ihnen Sicherheit, 
              Qualität und einen Service, auf den Sie sich verlassen können.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-blue-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Qualität</h3>
                <p className="text-gray-600">
                  Unser Heizöl entspricht höchsten Qualitätsstandards nach DIN SPEC 51603-1 
                  für optimale Brennleistung und Effizienz.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-green-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Zuverlässigkeit</h3>
                <p className="text-gray-600">
                  Pünktliche Lieferung, transparente Preise und 24/7 Notfallservice - 
                  darauf können Sie sich verlassen.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-orange-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Persönlicher Service</h3>
                <p className="text-gray-600">
                  Individuelle Beratung, flexible Liefertermine und ein Team, 
                  das sich um Ihre Bedürfnisse kümmert.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Area */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Unser Liefergebiet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir liefern zuverlässig in ganz Deutschland – von Berlin bis München, 
              von Hamburg bis Stuttgart, vom Ruhrgebiet bis nach Sachsen.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="text-primary-600 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">Ganz Deutschland</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Berlin und Brandenburg</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Hamburg und Norddeutschland</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Köln/Düsseldorf und Ruhrgebiet</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Frankfurt am Main und Rhein-Main-Gebiet</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Stuttgart und Baden-Württemberg</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Kostenlose Lieferung</h4>
                <p className="text-gray-700 mb-4">ab 1500 Liter in ganz Deutschland</p>
                <div className="text-2xl font-bold text-primary-600">4-7</div>
                <div className="text-sm text-gray-600">Werktage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Zertifizierungen & Qualitätsstandards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unsere Zertifizierungen garantieren Ihnen höchste Qualität und Sicherheit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    HILL-Clear Projects GmbH
                  </h2>
                  <p className="text-xl text-gray-600">
                    Ihr Partner für Heizöl in Deutschland
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Anschrift</h3>
                    <div className="space-y-2 text-gray-700">
                      <p>HILL-Clear Projects GmbH</p>
                      <p>Rottmannstr. 22a</p>
                      <p>80333 München</p>
                      <p>Deutschland</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Kontakt</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Phone className="text-primary-600 mr-3" size={20} />
                        <a href="tel:089244189180" className="text-gray-700 hover:underline">089 244 189 180</a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="text-primary-600 mr-3" size={20} />
                        <span className="text-gray-700">info@hill-heizoel.de</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Handelsregister</h3>
                    <div className="space-y-2 text-gray-700">
                      <p>HRB 267211</p>
                      <p>Amtsgericht München</p>
                      <p>USt-IdNr.: DE970703271</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Öffnungszeiten</h3>
                    <div className="space-y-2 text-gray-700">
                      <p>Mo-Fr: 8:00 - 18:00 Uhr</p>
                      <p>Sa: 9:00 - 14:00 Uhr</p>
                      <p>Notfallservice: 24/7</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                    Jetzt Heizöl bestellen
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
