
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { CheckCircle, TrendingDown, Shield, Calculator, CreditCard, FileText, Clock, MapPin } from 'lucide-react';
import PriceCalculator from './PriceCalculator';

const PriceOverviewSection = () => {
  const [activeTab, setActiveTab] = useState('prices');

  // Preisentwicklung Mock-Daten
  const priceHistory = [
    { month: 'Jan', standard: 0.68, premium: 0.71 },
    { month: 'Feb', standard: 0.69, premium: 0.72 },
    { month: 'Mär', standard: 0.67, premium: 0.70 },
    { month: 'Apr', standard: 0.70, premium: 0.73 },
    { month: 'Mai', standard: 0.72, premium: 0.75 },
    { month: 'Jun', standard: 0.70, premium: 0.73 },
  ];

  const chartConfig = {
    standard: {
      label: "Standard Heizöl",
      color: "#006b51",
    },
    premium: {
      label: "Premium Heizöl", 
      color: "#00a86b",
    },
  };

  const quantityDiscounts = [
    { range: '500-999L', discount: '0%', price: '0,70€/L' },
    { range: '1000-1999L', discount: '2%', price: '0,69€/L' },
    { range: '2000-2999L', discount: '3%', price: '0,68€/L' },
    { range: '3000L+', discount: '5%', price: '0,67€/L' },
  ];

  const paymentOptions = [
    {
      icon: CreditCard,
      title: 'Vorkasse',
      description: '2% Skonto bei Vorauszahlung',
      details: 'Bei Zahlung vor Lieferung gewähren wir Ihnen 2% Skonto auf den Gesamtbetrag.'
    },
    {
      icon: FileText,
      title: 'Rechnung',
      description: 'Für Stammkunden verfügbar',
      details: 'Zahlungsziel 14 Tage nach Rechnungsstellung. Für Neukunden nach Bonitätsprüfung.'
    },
    {
      icon: Clock,
      title: 'Ratenzahlung',
      description: 'Ab 1000€ Bestellwert',
      details: '0% Zinsen bei 3-6 Monaten Laufzeit. Längere Laufzeiten auf Anfrage.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transparente Preisübersicht
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Faire Preise ohne versteckte Kosten. Vergleichen Sie selbst und überzeugen Sie sich 
            von unserem unschlagbaren Preis-Leistungs-Verhältnis.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="prices">Aktuelle Preise</TabsTrigger>
            <TabsTrigger value="payment">Zahlungsarten</TabsTrigger>
            <TabsTrigger value="transparency">Kostentransparenz</TabsTrigger>
            <TabsTrigger value="calculator">Preisrechner</TabsTrigger>
          </TabsList>

          <TabsContent value="prices" className="space-y-8">
            {/* Aktuelle Preise */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary-200 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary-600">Standard Heizöl</CardTitle>
                  <div className="text-4xl font-bold text-gray-900">
                    ab 0,70€
                    <span className="text-lg text-gray-600">/Liter</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      DIN-Norm geprüft
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      Schwefelarm (≤ 50 mg/kg)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      Kostenlose Lieferung ab 500L
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary-400 shadow-lg bg-primary-50">
                <CardHeader className="text-center">
                  <Badge className="mb-2 bg-primary-600">PREMIUM QUALITÄT</Badge>
                  <CardTitle className="text-2xl text-primary-600">Premium Heizöl</CardTitle>
                  <div className="text-4xl font-bold text-gray-900">
                    ab 0,73€
                    <span className="text-lg text-gray-600">/Liter</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      Alle Standard-Vorteile
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      Additive für bessere Verbrennung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      Längere Lagerfähigkeit
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Mengenrabatte */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingDown className="mr-2 text-primary-600" />
                  Mengenrabatte - Je mehr Sie bestellen, desto günstiger
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {quantityDiscounts.map((discount, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-primary-600">{discount.range}</div>
                      <div className="text-2xl font-bold text-gray-900">{discount.price}</div>
                      <Badge variant="outline" className="mt-2">
                        {discount.discount} Ersparnis
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Preisentwicklung */}
            <Card>
              <CardHeader>
                <CardTitle>Preisentwicklung der letzten 6 Monate</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={priceHistory}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="standard"
                        stroke="var(--color-standard)"
                        strokeWidth={2}
                        dot={{ fill: "var(--color-standard)" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="premium"
                        stroke="var(--color-premium)"
                        strokeWidth={2}
                        dot={{ fill: "var(--color-premium)" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <p className="text-sm text-gray-600 mt-4">
                  Alle Preise in Euro pro Liter inkl. MwSt. Aktuelle Tagespreise können abweichen.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {paymentOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle>{option.title}</CardTitle>
                      <p className="text-primary-600 font-semibold">{option.description}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{option.details}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle>Bankverbindung</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold">HILL-Clear Projects GmbH</p>
                    <p className="text-gray-600">Sparkasse München</p>
                    <p className="text-gray-600">IBAN: DE89 7015 0000 1234 5678 90</p>
                    <p className="text-gray-600">BIC: SSKMDEMMXXX</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      Bei Überweisungen bitte immer die Bestellnummer als Verwendungszweck angeben. 
                      So können wir Ihre Zahlung schnell zuordnen und die Lieferung veranlassen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transparency" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center">
                    <Shield className="mr-2" />
                    Unsere Preisgarantie
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Keine versteckten Kosten oder Aufschläge
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Kostenlose Lieferung ab 500 Liter
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Preise gelten für ganz Bayern
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Tagesaktuelle Preise ohne Nachberechnung
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Warum sind wir günstiger?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary-600">Direkteinkauf</h4>
                      <p className="text-sm text-gray-600">
                        Wir kaufen direkt beim Hersteller und sparen Zwischenhändler-Margen.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-600">Optimierte Logistik</h4>
                      <p className="text-sm text-gray-600">
                        Effiziente Routenplanung reduziert Transportkosten.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-600">Faire Marge</h4>
                      <p className="text-sm text-gray-600">
                        Wir arbeiten mit fairen, nicht überhöhten Gewinnspannen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary-50 border-primary-200">
              <CardHeader>
                <CardTitle className="text-center text-primary-800">
                  Preisvergleich zu Mitbewerbern
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    Bis zu 15% günstiger
                  </div>
                  <p className="text-gray-600 mb-4">
                    als der Durchschnitt unserer Mitbewerber in Bayern
                  </p>
                  <Badge className="bg-primary-600">
                    Basierend auf Marktanalyse vom Juni 2024
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calculator" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Berechnen Sie Ihren individuellen Preis
              </h3>
              <p className="text-gray-600">
                Nutzen Sie unseren Preisrechner für eine sofortige Preiskalkulation 
                und bestellen Sie direkt online.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <PriceCalculator />
            </div>

            <div className="text-center mt-8">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-4">
                <MapPin size={16} className="text-primary-600" />
                <span>Kostenlose Lieferung in ganz Deutschland</span>
              </div>
              <a href="tel:089244189180">
                <Button variant="outline" className="border-primary-600 text-primary-600">
                  Haben Sie Fragen? Rufen Sie uns an: 089 244 189 180
                </Button>
              </a>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PriceOverviewSection;
