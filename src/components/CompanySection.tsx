
import { Building, Users, Award, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const CompanySection = () => {
  const stats = [
    {
      icon: Building,
      number: '2003',
      label: 'Gegründet',
      description: 'Über 20 Jahre Erfahrung'
    },
    {
      icon: Users,
      number: '100.000+',
      label: 'Kunden',
      description: 'Zufriedene Heizöl-Kunden'
    },
    {
      icon: Award,
      number: '4.9/5',
      label: 'Bewertung',
      description: 'Ausgezeichneter Service'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Service',
      description: 'Immer für Sie da'
    }
  ];

  return (
    <section id="ueber-uns" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Über HILL-Heizöl
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ihr zuverlässiger Partner für Heizöl in Deutschland seit über 20 Jahren. 
            Wir stehen für Qualität, Service und faire Preise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Company Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Unsere Geschichte
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Seit der Gründung im Jahr 2003 haben wir uns zu einem der führenden 
                Heizöl-Anbieter in Deutschland entwickelt. Was als kleines Familienunternehmen 
                in München begann, ist heute ein zuverlässiger Partner für über 100.000 
                Kunden in ganz Deutschland.
              </p>
              <p>
                Unser Erfolgsrezept ist einfach: Wir bieten erstklassige Qualität zu 
                fairen Preisen und legen dabei größten Wert auf persönlichen Service 
                und Kundenzufriedenheit. Dabei setzen wir auf modernste Technik und 
                ein erfahrenes Team.
              </p>
              <p>
                Als bayerisches Unternehmen kennen wir die Bedürfnisse unserer Kunden 
                genau und sind stolz darauf, einen Beitrag zur Energieversorgung in 
                unserem schönen Bayern zu leisten.
              </p>
            </div>
          </div>

          {/* Company Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="h-96 w-full">
                  <img 
                    src="https://i.imgur.com/xPI8LoI.jpeg" 
                    alt="HILL-Heizöl Unternehmen" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">20+</div>
                <div className="text-xs text-gray-600">Jahre</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary-600" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-primary-600 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Unsere Werte
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Qualität</h4>
              <p className="text-gray-600">
                Wir liefern ausschließlich geprüftes Premium-Heizöl nach DIN-Norm 
                für optimale Heizleistung und Effizienz.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Vertrauen</h4>
              <p className="text-gray-600">
                Zuverlässigkeit und Transparenz sind die Grundpfeiler unseres 
                Geschäfts. Darauf können Sie sich verlassen.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💚</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Service</h4>
              <p className="text-gray-600">
                Persönlicher Kundenservice und individuelle Beratung stehen 
                bei uns an erster Stelle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
