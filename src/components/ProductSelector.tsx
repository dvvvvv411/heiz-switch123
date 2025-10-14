
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check, Droplets, Shield } from 'lucide-react';

const products = {
  standard: {
    name: 'Standard Heizöl',
    price: 0.70,
    description: 'Schwefelarmes Heizöl EL',
    features: [
      'DIN 51603-1 konform',
      'Für alle Heizungsanlagen geeignet',
      'Bewährte Qualität',
      'Kostengünstig'
    ],
    icon: Droplets,
    color: 'bg-blue-500'
  },
  premium: {
    name: 'Premium Heizöl',
    price: 0.73,
    description: 'Additivierte Qualität',
    features: [
      'Besserer Korrosionsschutz',
      'Längere Lagerfähigkeit',
      'Optimierte Verbrennung',
      'Moderne Additive'
    ],
    icon: Shield,
    color: 'bg-primary-600'
  }
};

const ProductSelector = () => {
  const [selectedProduct, setSelectedProduct] = useState<'standard' | 'premium'>('standard');
  const [liters, setLiters] = useState<number>(1500);

  const currentProduct = products[selectedProduct];
  const totalPrice = liters * currentProduct.price;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Wählen Sie Ihr Heizöl
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vergleichen Sie unsere Produkte und finden Sie das passende Heizöl für Ihre Bedürfnisse.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Product Selection */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Produkt wählen</h3>
            <RadioGroup 
              value={selectedProduct} 
              onValueChange={(value: 'standard' | 'premium') => setSelectedProduct(value)}
              className="space-y-4"
            >
              {Object.entries(products).map(([key, product]) => {
                const IconComponent = product.icon;
                return (
                  <div key={key} className="relative">
                    <RadioGroupItem value={key} id={key} className="peer sr-only" />
                    <Label 
                      htmlFor={key} 
                      className="flex items-start p-6 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-300 peer-checked:border-primary-600 peer-checked:bg-primary-50 transition-all"
                    >
                      <div className={`w-10 h-10 ${product.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-semibold">{product.name}</h4>
                          <span className="text-xl font-bold text-primary-600">
                            {product.price.toFixed(2)}€/L
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{product.description}</p>
                        <ul className="space-y-1">
                          {product.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <Check className="w-4 h-4 text-primary-600 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </div>

          {/* Price Calculator */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">Preisrechner</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Gewähltes Produkt</h4>
                <p className="text-2xl font-bold text-primary-600">{currentProduct.name}</p>
                <p className="text-gray-600">{currentProduct.description}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="liters" className="text-base font-medium">
                  Liter-Anzahl (min. 1500L)
                </Label>
                <Input
                  id="liters"
                  type="number"
                  min={1500}
                  step={100}
                  value={liters}
                  onChange={(e) => setLiters(Number(e.target.value))}
                  className="text-lg h-12"
                  placeholder="z.B. 1500"
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{liters} Liter × {currentProduct.price.toFixed(2)}€</span>
                  <span>{totalPrice.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold text-primary-600 border-t pt-2">
                  <span>Gesamtpreis:</span>
                  <span>{totalPrice.toFixed(2)}€</span>
                </div>
              </div>

              <Button 
                className="w-full bg-primary-600 hover:bg-primary-700 text-white h-12 text-lg font-semibold"
                disabled={liters < 1500}
              >
                Jetzt bestellen
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Alle Preise inkl. MwSt. • Mindestbestellmenge: 1500 Liter
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductSelector;
