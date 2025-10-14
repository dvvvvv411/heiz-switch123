
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Truck, Shield, Clock, Calculator } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useBranding } from '@/contexts/BrandingContext';

const PriceCalculator = () => {
  const [liters, setLiters] = useState<string>('1500');
  const [oilType, setOilType] = useState<'standard_heizoel' | 'premium_heizoel'>('standard_heizoel');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { branding } = useBranding();

  const prices = {
    standard_heizoel: 0.70,
    premium_heizoel: 0.73
  };

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
          // Redirect to checkout with token
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

  const getDisplayName = (type: string) => {
    return type === 'standard_heizoel' ? 'Standard Heizöl' : 'Premium Heizöl';
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <Calculator className="w-6 h-6 text-primary-600" />
          Preisrechner
        </CardTitle>
        <p className="text-gray-600">Berechnen Sie Ihren Heizölpreis</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Oil Type Selection */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Heizöltyp wählen</Label>
          <Select value={oilType} onValueChange={(value: 'standard_heizoel' | 'premium_heizoel') => setOilType(value)}>
            <SelectTrigger className="h-12 text-base">
              <SelectValue placeholder="Heizöltyp auswählen" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="standard_heizoel">
                <div className="flex justify-between items-center w-full">
                  <span>Standard Heizöl</span>
                  <span className="font-bold text-accent-orange-600 ml-4">{prices.standard_heizoel.toFixed(2)}€/L</span>
                </div>
              </SelectItem>
              <SelectItem value="premium_heizoel">
                <div className="flex justify-between items-center w-full">
                  <span>Premium Heizöl</span>
                  <span className="font-bold text-accent-orange-600 ml-4">{prices.premium_heizoel.toFixed(2)}€/L</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Liter Input */}
        <div className="space-y-2">
          <Label htmlFor="liters" className="text-base font-medium">
            Liter-Anzahl ({minLiters} - {maxLiters}L)
          </Label>
          <Input
            id="liters"
            type="number"
            min={minLiters}
            max={maxLiters}
            step={50}
            value={liters}
            onChange={handleLitersChange}
            className="text-lg h-12"
            placeholder={`z.B. ${minLiters}`}
          />
          {liters !== '' && litersNum < minLiters && (
            <p className="text-sm text-red-600">
              Mindestbestellmenge: {minLiters} Liter
            </p>
          )}
          {liters !== '' && litersNum > maxLiters && (
            <p className="text-sm text-red-600">
              Maximalmenge: {maxLiters} Liter
            </p>
          )}
        </div>

        {/* Live Price Display */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-orange-50 p-4 rounded-lg space-y-3 border border-accent-orange-200">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Produkt:</span>
            <span className="font-medium">{getDisplayName(oilType)}</span>
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
            <Truck size={16} className="text-accent-orange-500" />
            <span>Kostenlose Lieferung</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={16} className="text-primary-600" />
            <span>Lieferung innerhalb 4-7 Werktagen</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield size={16} className="text-accent-orange-500" />
            <span>Geprüfte Qualität nach DIN-Norm</span>
          </div>
        </div>

        {/* Order Button */}
        <Button 
          onClick={handleOrder}
          disabled={isLoading || !canCalculate}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white h-12 text-lg font-semibold transition-all duration-200 hover:scale-105"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Wird verarbeitet...</span>
            </div>
          ) : (
            'Jetzt bestellen'
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Alle Preise inkl. MwSt. • Mindestbestellmenge: {minLiters}L • Maximum: {maxLiters}L
        </p>
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;
