
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, CheckCircle, Leaf } from 'lucide-react';

const QualityCertificates = () => {
  const certificates = [
    {
      title: 'DIN EN 590',
      description: 'Europäische Norm für Dieselkraftstoff und Heizöl',
      icon: Shield,
      status: 'Zertifiziert'
    },
    {
      title: 'ISO 9001:2015',
      description: 'Qualitätsmanagementsystem',
      icon: Award,
      status: 'Zertifiziert'
    },
    {
      title: 'ISO 14001',
      description: 'Umweltmanagementsystem',
      icon: Leaf,
      status: 'Zertifiziert'
    },
    {
      title: 'RAL Gütezeichen',
      description: 'Gütegemeinschaft Energiehandel',
      icon: CheckCircle,
      status: 'Zertifiziert'
    }
  ];

  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Qualitätszertifikate
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unsere Produkte erfüllen höchste Qualitätsstandards und sind nach 
            anerkannten nationalen und internationalen Normen zertifiziert.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    {cert.status}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QualityCertificates;
