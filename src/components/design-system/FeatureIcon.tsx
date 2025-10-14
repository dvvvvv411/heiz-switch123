
import React from 'react';
import { cn } from "@/lib/utils";

interface FeatureIconProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'outlined' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({
  icon,
  title,
  description,
  variant = 'default',
  size = 'md',
  className
}) => {
  const variantClasses = {
    default: "bg-hill-green text-white shadow-medium",
    outlined: "bg-white border-2 border-hill-green text-hill-green shadow-soft",
    minimal: "bg-hill-gray text-hill-green"
  };

  const sizeClasses = {
    sm: {
      container: "w-12 h-12",
      icon: "w-6 h-6",
      title: "text-lg",
      description: "text-sm"
    },
    md: {
      container: "w-16 h-16",
      icon: "w-8 h-8",
      title: "text-xl",
      description: "text-base"
    },
    lg: {
      container: "w-20 h-20",
      icon: "w-10 h-10",
      title: "text-2xl",
      description: "text-lg"
    }
  };

  return (
    <div className={cn("text-center group", className)}>
      <div className={cn(
        "mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-medium",
        variantClasses[variant],
        sizeClasses[size].container
      )}>
        <div className={sizeClasses[size].icon}>
          {icon}
        </div>
      </div>
      
      <h3 className={cn(
        "font-semibold text-hill-text mb-2",
        sizeClasses[size].title
      )}>
        {title}
      </h3>
      
      <p className={cn(
        "text-hill-text-light leading-relaxed",
        sizeClasses[size].description
      )}>
        {description}
      </p>
    </div>
  );
};

export { FeatureIcon };
