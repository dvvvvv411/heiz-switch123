
import { Truck, Shield, Clock, Phone, Award, Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'Kostenlose Lieferung',
      description: 'Kostenlose Lieferung in Deutschland ab 1500 Liter Bestellmenge',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Shield,
      title: 'Premium Qualität',
      description: 'Geprüftes Heizöl nach DIN-Norm für optimale Heizleistung',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Clock,
      title: 'Schnelle Lieferung',
      description: 'Lieferung innerhalb von 4-7 Werktagen direkt zu Ihnen',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: Phone,
      title: '24/7 Service',
      description: 'Persönlicher Kundenservice und Notfall-Hotline',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Award,
      title: 'Über 20 Jahre Erfahrung',
      description: 'Zuverlässiger Partner für Heizöl in Deutschland seit 2003',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Users,
      title: '100.000+ Kunden',
      description: 'Tausende zufriedene Kunden vertrauen auf unsere Qualität',
      color: 'bg-indigo-50 text-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Warum HILL-Heizöl?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Als führender Heizöl-Anbieter in Deutschland stehen wir für Qualität, Zuverlässigkeit 
            und erstklassigen Service. Überzeugen Sie sich von unseren Vorteilen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="mt-20 bg-primary-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1500L</div>
              <div className="text-primary-100">Mindestbestellmenge</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4-7</div>
              <div className="text-primary-100">Werktage Lieferzeit</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">Kundenservice</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-100">Kundenzufriedenheit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
