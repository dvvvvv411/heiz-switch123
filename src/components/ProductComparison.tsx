
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from 'lucide-react';

const ProductComparison = () => {
  const comparisonData = [
    {
      feature: 'Schwefelgehalt',
      standard: '< 50 mg/kg',
      premium: '< 50 mg/kg'
    },
    {
      feature: 'DIN-Norm',
      standard: 'DIN 51603-1',
      premium: 'DIN 51603-1'
    },
    {
      feature: 'Korrosionsschutz',
      standard: 'Standard',
      premium: 'Verstärkt'
    },
    {
      feature: 'Antioxidantien',
      standard: false,
      premium: true
    },
    {
      feature: 'Biozid-Schutz',
      standard: false,
      premium: true
    },
    {
      feature: 'Metalldeaktivator',
      standard: false,
      premium: true
    },
    {
      feature: 'Lagerfähigkeit',
      standard: '6 Monate',
      premium: '12+ Monate'
    },
    {
      feature: 'Brennwert (kWh/l)',
      standard: '9,8',
      premium: '9,8'
    },
    {
      feature: 'Preis pro Liter',
      standard: '0,70 €',
      premium: '0,73 €'
    }
  ];

  const renderCell = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-400 mx-auto" />
      );
    }
    return value;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Produktvergleich
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Detaillierte Gegenüberstellung unserer Heizöl-Qualitäten für Ihre optimale Entscheidung.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl">
              Standard vs. Premium Heizöl
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3">Eigenschaft</TableHead>
                  <TableHead className="text-center">Standard Heizöl</TableHead>
                  <TableHead className="text-center">Premium Heizöl</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.feature}</TableCell>
                    <TableCell className="text-center">
                      {renderCell(row.standard)}
                    </TableCell>
                    <TableCell className="text-center">
                      {renderCell(row.premium)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductComparison;
