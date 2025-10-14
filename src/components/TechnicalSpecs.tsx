
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TechnicalSpecs = () => {
  const standardSpecs = [
    { property: 'Dichte bei 15°C', value: '0,82 - 0,86 kg/l', norm: 'DIN EN ISO 3675' },
    { property: 'Kinematische Viskosität bei 20°C', value: '< 6,0 mm²/s', norm: 'DIN EN ISO 3104' },
    { property: 'Flammpunkt', value: '> 55°C', norm: 'DIN EN ISO 2719' },
    { property: 'Schwefelgehalt', value: '< 50 mg/kg', norm: 'DIN EN ISO 20846' },
    { property: 'Wassergehalt', value: '< 200 mg/kg', norm: 'DIN EN ISO 12937' },
    { property: 'Sedimentgehalt', value: '< 24 mg/kg', norm: 'DIN EN 12662' },
    { property: 'Asche', value: '< 0,01 %', norm: 'DIN EN ISO 3987' },
    { property: 'Brennwert', value: '≥ 42,6 MJ/kg', norm: 'DIN 51900' }
  ];

  const premiumSpecs = [
    { property: 'Dichte bei 15°C', value: '0,82 - 0,86 kg/l', norm: 'DIN EN ISO 3675' },
    { property: 'Kinematische Viskosität bei 20°C', value: '< 6,0 mm²/s', norm: 'DIN EN ISO 3104' },
    { property: 'Flammpunkt', value: '> 55°C', norm: 'DIN EN ISO 2719' },
    { property: 'Schwefelgehalt', value: '< 50 mg/kg', norm: 'DIN EN ISO 20846' },
    { property: 'Wassergehalt', value: '< 200 mg/kg', norm: 'DIN EN ISO 12937' },
    { property: 'Sedimentgehalt', value: '< 24 mg/kg', norm: 'DIN EN 12662' },
    { property: 'Asche', value: '< 0,01 %', norm: 'DIN EN ISO 3987' },
    { property: 'Brennwert', value: '≥ 42,6 MJ/kg', norm: 'DIN 51900' },
    { property: 'Antioxidantien', value: 'BHT 17-24 mg/l', norm: 'Intern' },
    { property: 'Metalldeaktivator', value: 'N,N-Disalicyliden-1,2-propandiamin', norm: 'Intern' },
    { property: 'Biozid', value: 'Kathon BP 1.5', norm: 'Intern' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Technische Datenblätter
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Detaillierte technische Spezifikationen und Prüfwerte unserer Heizöl-Produkte.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="standard" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="standard">Standard Heizöl</TabsTrigger>
              <TabsTrigger value="premium">Premium Heizöl</TabsTrigger>
            </TabsList>
            
            <TabsContent value="standard">
              <Card>
                <CardHeader>
                  <CardTitle>Standard Heizöl - Technische Daten</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Eigenschaft</th>
                          <th className="text-left py-3 px-4">Wert</th>
                          <th className="text-left py-3 px-4">Prüfnorm</th>
                        </tr>
                      </thead>
                      <tbody>
                        {standardSpecs.map((spec, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{spec.property}</td>
                            <td className="py-3 px-4">{spec.value}</td>
                            <td className="py-3 px-4 text-gray-600">{spec.norm}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="premium">
              <Card>
                <CardHeader>
                  <CardTitle>Premium Heizöl - Technische Daten</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Eigenschaft</th>
                          <th className="text-left py-3 px-4">Wert</th>
                          <th className="text-left py-3 px-4">Prüfnorm</th>
                        </tr>
                      </thead>
                      <tbody>
                        {premiumSpecs.map((spec, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{spec.property}</td>
                            <td className="py-3 px-4">{spec.value}</td>
                            <td className="py-3 px-4 text-gray-600">{spec.norm}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
