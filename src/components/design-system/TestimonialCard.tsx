
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from 'lucide-react';
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  location?: string;
  avatar?: string;
  rating: number;
  testimonial: string;
  date?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  avatar,
  rating,
  testimonial,
  date,
  className
}) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "w-4 h-4",
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        )}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className={cn(
      "relative bg-white shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden",
      className
    )}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hill-green to-hill-green-light"></div>
      
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="w-12 h-12 flex-shrink-0">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-hill-green text-white font-semibold">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-semibold text-hill-text">{name}</h4>
                {location && (
                  <p className="text-sm text-hill-text-light">{location}</p>
                )}
              </div>
              <div className="flex items-center space-x-1">
                {renderStars()}
              </div>
            </div>
            
            <div className="relative">
              <Quote className="absolute -top-2 -left-1 w-8 h-8 text-hill-green opacity-20" />
              <blockquote className="text-hill-text leading-relaxed pl-6">
                "{testimonial}"
              </blockquote>
            </div>
            
            {date && (
              <p className="text-xs text-hill-text-light mt-3">
                {date}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { TestimonialCard };
