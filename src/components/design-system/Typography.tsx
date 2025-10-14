
import React from 'react';
import { cn } from "@/lib/utils";

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'overline';
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'muted' | 'success';
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  className,
  color
}) => {
  const colorClasses = {
    primary: 'text-hill-text',
    secondary: 'text-hill-text-light',
    muted: 'text-gray-500',
    success: 'text-hill-success'
  };

  const variants = {
    h1: {
      component: 'h1' as const,
      classes: 'text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight'
    },
    h2: {
      component: 'h2' as const,
      classes: 'text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight'
    },
    h3: {
      component: 'h3' as const,
      classes: 'text-2xl md:text-3xl lg:text-4xl font-semibold font-heading leading-tight'
    },
    h4: {
      component: 'h4' as const,
      classes: 'text-xl md:text-2xl lg:text-3xl font-semibold font-heading leading-tight'
    },
    h5: {
      component: 'h5' as const,
      classes: 'text-lg md:text-xl font-semibold font-heading leading-tight'
    },
    h6: {
      component: 'h6' as const,
      classes: 'text-base md:text-lg font-semibold font-heading leading-tight'
    },
    body: {
      component: 'p' as const,
      classes: 'text-base leading-relaxed'
    },
    caption: {
      component: 'span' as const,
      classes: 'text-sm leading-normal'
    },
    overline: {
      component: 'span' as const,
      classes: 'text-xs uppercase tracking-wider font-semibold'
    }
  };

  const { component: Component, classes } = variants[variant];

  return React.createElement(
    Component,
    {
      className: cn(
        classes,
        color && colorClasses[color],
        className
      )
    },
    children
  );
};

export { Typography };
