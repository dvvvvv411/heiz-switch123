
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { cn } from "@/lib/utils";

interface PriceCardProps {
  title: string;
  price: number;
  unit: string;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  badge?: string;
  description?: string;
  onOrder?: () => void;
  className?: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  price,
  unit,
  originalPrice,
  features,
  popular = false,
  badge,
  description,
  onOrder,
  className
}) => {
  return (
    <Card className={cn(
      "relative overflow-hidden transition-all duration-300 hover:shadow-strong hover:-translate-y-1",
      popular && "ring-2 ring-hill-green scale-105",
      className
    )}>
      {popular && (
        <div className="absolute top-0 left-0 right-0 bg-hill-green text-white text-center py-2 text-sm font-semibold">
          <Star className="inline w-4 h-4 mr-1" />
          Beliebteste Wahl
        </div>
      )}
      
      <CardHeader className={cn("text-center pb-4", popular && "pt-12")}>
        {badge && (
          <Badge className="mx-auto mb-2 bg-hill-success text-white">
            {badge}
          </Badge>
        )}
        
        <CardTitle className="text-2xl font-bold text-hill-text mb-2">
          {title}
        </CardTitle>
        
        {description && (
          <p className="text-hill-text-light text-sm">
            {description}
          </p>
        )}
        
        <div className="mt-4">
          <div className="flex items-baseline justify-center">
            {originalPrice && (
              <span className="text-hill-text-light line-through text-lg mr-2">
                {originalPrice.toFixed(2)}€
              </span>
            )}
            <span className="text-4xl font-bold text-hill-green">
              {price.toFixed(2)}€
            </span>
            <span className="text-hill-text-light ml-1">/{unit}</span>
          </div>
          
          {originalPrice && (
            <div className="mt-2">
              <Badge variant="destructive" className="bg-hill-success">
                Sparen Sie {(originalPrice - price).toFixed(2)}€
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-hill-success flex-shrink-0" />
              <span className="text-hill-text text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <CTAButton
          variant={popular ? "primary" : "secondary"}
          size="lg"
          onClick={onOrder}
          showArrow
          className="w-full"
        >
          Jetzt bestellen
        </CTAButton>
      </CardContent>
    </Card>
  );
};

export { PriceCard };
