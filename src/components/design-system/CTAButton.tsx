
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Loader2 } from 'lucide-react';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  href?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled,
  loading,
  icon,
  showArrow = false,
  className,
  href,
  ...props
}) => {
  const baseClasses = "font-semibold transition-all duration-200 hover:scale-105 active:scale-95";
  
  const variantClasses = {
    primary: "bg-hill-green hover:bg-hill-green-dark text-white shadow-medium hover:shadow-strong",
    secondary: "bg-accent-orange-500 hover:bg-accent-orange-600 text-white shadow-medium hover:shadow-strong",
    outline: "border-2 border-hill-green text-hill-green hover:bg-hill-green hover:text-white",
    ghost: "text-hill-green hover:bg-hill-gray"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm h-9",
    md: "px-6 py-3 text-base h-11",
    lg: "px-8 py-4 text-lg h-12",
    xl: "px-10 py-5 text-xl h-14"
  };

  const buttonContent = (
    <>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {!loading && icon && <span className="mr-2">{icon}</span>}
      {children}
      {showArrow && !loading && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    "group",
    className
  );

  if (href) {
    return (
      <a href={href} className={cn(buttonClasses, "inline-flex items-center justify-center no-underline")}>
        {buttonContent}
      </a>
    );
  }

  return (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
      {...props}
    >
      {buttonContent}
    </Button>
  );
};

export { CTAButton };
