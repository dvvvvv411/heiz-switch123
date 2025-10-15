
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Truck, Shield, Clock, Calculator, ChevronLeft, ChevronRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useBranding } from '@/contexts/BrandingContext';

const MobilePriceCalculator = () => {
  const [liters, setLiters] = useState<string>('1500');
  const [oilType, setOilType] = useState<'standard_heizoel' | 'premium_heizoel'>('standard_heizoel');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { branding } = useBranding();
  const scrollRef = useRef<HTMLDivElement>(null);

  const prices = {
    standard_heizoel: 0.70,
    premium_heizoel: 0.73
  };

  const products = [
    {
      id: 'standard_heizoel' as const,
      name: 'Standard Heizöl',
      price: prices.standard_heizoel,
      description: 'Bewährte Qualität',
      features: ['DIN-konform', 'Kostengünstig']
    },
    {
      id: 'premium_heizoel' as const,
      name: 'Premium Heizöl',
      price: prices.premium_heizoel,
      description: 'Additivierte Qualität',
      features: ['Korrosionsschutz', 'Längere Lagerfähigkeit']
    }
  ];

  const shopId = branding?.shopId || "46f10e96-ab3a-4f6d-a31d-0414685fb7c1";
  const currentPrice = prices[oilType];
  const litersNum = parseInt(liters) || 0;
  const canCalculate = liters !== '' && litersNum >= 1500 && litersNum <= 32000;
  const totalAmount = canCalculate ? litersNum * currentPrice : 0;
  const minLiters = 1500;
  const maxLiters = 32000;

  const handleLitersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLiters(e.target.value);
  };

  const adjustLiters = (amount: number) => {
    const newValue = litersNum + amount;
    if (newValue >= minLiters && newValue <= maxLiters) {
      setLiters(newValue.toString());
    }
  };

  const selectProduct = (productId: typeof oilType) => {
    setOilType(productId);
  };

  const scrollToProduct = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleOrder = async () => {
    if (!canCalculate) {
      toast({
        title: "Ungültige Literzahl",
        description: `Bitte wählen Sie zwischen ${minLiters} und ${maxLiters} Litern.`,
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const apiUrl = 'https://luhhnsvwtnmxztcmdxyq.supabase.co/functions/v1/create-order-token';
      
      const requestBody = {
        product: oilType,
        liters: litersNum,
        shop_id: shopId,
        total_amount: parseFloat(totalAmount.toFixed(2)),
        delivery_fee: 0,
        price_per_liter: parseFloat(currentPrice.toFixed(2))
      };

      console.log('Sending order request to:', apiUrl);
      console.log('Request body:', requestBody);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      console.log('API Response status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('API Response data:', data);
        
        if (data.token) {
          const checkoutDomain = branding?.checkoutDomain || 'hill-heizoel.de';
          const checkoutUrl = `https://checkout.${checkoutDomain}/checkout?token=${data.token}`;
          console.log('Redirecting to:', checkoutUrl);
          window.location.assign(checkoutUrl);
          
          toast({
            title: "Bestellung weitergeleitet",
            description: "Sie werden zum Checkout weitergeleitet.",
          });
        } else {
          throw new Error('Kein Token erhalten');
        }
      } else {
        const errorData = await response.text();
        console.error('API Error response:', errorData);
        throw new Error(`API Error: ${response.status}`);
      }
    } catch (error) {
      console.error('Order error:', error);
      const phone = branding?.phone || '089 244 189 180';
      toast({
        title: "Fehler bei der Bestellung",
        description: `Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch unter ${phone}.`,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const currentProduct = products.find(p => p.id === oilType)!;

  return (
    <div className="w-full max-w-sm mx-auto">
      <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <Calculator className="w-5 h-5 text-primary-600" />
            Preisrechner
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Product Selection - Improved with navigation */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Heizöltyp wählen</Label>
            
            {/* Navigation and scroll indicators */}
            <div className="relative">
              {/* Navigation buttons */}
              <button
                onClick={() => scrollToProduct('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-1 shadow-md transition-all duration-200"
                aria-label="Vorheriges Produkt"
              >
                <ChevronLeft size={16} className="text-gray-600" />
              </button>
              
              <button
                onClick={() => scrollToProduct('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-1 shadow-md transition-all duration-200"
                aria-label="Nächstes Produkt"
              >
                <ChevronRight size={16} className="text-gray-600" />
              </button>

              {/* Scrollable container with improved visibility */}
              <div 
                ref={scrollRef}
                className="flex gap-3 overflow-x-auto scrollbar-hide px-8 py-2"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  scrollSnapType: 'x mandatory'
                }}
              >
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className={cn(
                      "flex-shrink-0 w-44 p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 scroll-snap-align-start",
                      oilType === product.id 
                        ? "border-accent-orange-500 bg-accent-orange-50 shadow-md scale-105" 
                        : "border-gray-200 bg-white hover:border-accent-orange-300 hover:shadow-sm"
                    )}
                    onClick={() => selectProduct(product.id)}
                  >
                    <div className="text-center">
                      <h4 className="font-semibold text-sm mb-1 text-gray-800">{product.name}</h4>
                      <p className="text-xl font-bold text-accent-orange-600 mb-1">
                        {product.price.toFixed(2)}€/L
                      </p>
                      <p className="text-xs text-gray-600 mb-2">{product.description}</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {product.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll indicators */}
              <div className="flex justify-center mt-2 gap-1">
                {products.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-200",
                      index === products.findIndex(p => p.id === oilType)
                        ? "bg-accent-orange-500" 
                        : "bg-gray-300"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Liter Input with Touch Controls */}
          <div className="space-y-3">
            <Label htmlFor="liters" className="text-base font-medium">
              Liter-Anzahl ({minLiters} - {maxLiters}L)
            </Label>
            <div className="flex items-center space-x-3">
              <Button
                type="button"
                variant="outline"
                className="flex-shrink-0 w-12 h-12 p-0 border-accent-orange-300 hover:bg-accent-orange-50"
                onClick={() => adjustLiters(-100)}
                disabled={litersNum <= minLiters}
              >
                <ChevronLeft size={20} />
              </Button>
              <Input
                id="liters"
                type="number"
                min={minLiters}
                max={maxLiters}
                step={50}
                value={liters}
                onChange={handleLitersChange}
                className="text-center text-lg h-12 flex-1"
                inputMode="numeric"
              />
              <Button
                type="button"
                variant="outline"
                className="flex-shrink-0 w-12 h-12 p-0 border-accent-orange-300 hover:bg-accent-orange-50"
                onClick={() => adjustLiters(100)}
                disabled={litersNum >= maxLiters}
              >
                <ChevronRight size={20} />
              </Button>
            </div>
            {liters !== '' && litersNum < minLiters && (
              <p className="text-sm text-red-600 text-center">
                Mindestbestellmenge: {minLiters} Liter
              </p>
            )}
            {liters !== '' && litersNum > maxLiters && (
              <p className="text-sm text-red-600 text-center">
                Maximalmenge: {maxLiters} Liter
              </p>
            )}
            <div className="flex justify-center space-x-2">
              {[1500, 2000, 5000, 10000].map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-xs px-3 py-1 h-8 border-accent-orange-300 hover:bg-accent-orange-50 hover:border-accent-orange-500"
                  onClick={() => setLiters(amount.toString())}
                >
                  {amount}L
                </Button>
              ))}
            </div>
          </div>

          {/* Price Display */}
          <div className="bg-gradient-to-r from-primary-50 to-accent-orange-50 p-4 rounded-lg space-y-2 border border-accent-orange-200">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Produkt:</span>
              <span className="font-medium">{currentProduct.name}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Menge:</span>
              <span className="font-medium">{liters || '—'} Liter</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Preis pro Liter:</span>
              <span className="font-medium text-accent-orange-600">{currentPrice.toFixed(2)}€</span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Gesamtpreis:</span>
                <span className="text-accent-orange-600">{canCalculate ? totalAmount.toFixed(2) : '—'}€</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Truck size={14} className="text-accent-orange-500" />
              <span>Kostenlose Lieferung</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={14} className="text-primary-600" />
              <span>Lieferung in 4-7 Werktagen</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield size={14} className="text-accent-orange-500" />
              <span>Geprüfte DIN-Qualität</span>
            </div>
          </div>

          {/* Order Button */}
          <Button 
            onClick={handleOrder}
            disabled={isLoading || !canCalculate}
            className="w-full bg-accent-orange-500 hover:bg-accent-orange-600 text-white h-14 text-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Wird verarbeitet...</span>
              </div>
            ) : (
              <>
                <span>{canCalculate ? `Jetzt bestellen - ${totalAmount.toFixed(2)}€` : 'Jetzt bestellen'}</span>
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MobilePriceCalculator;
