
import React from 'react';
import { CTAButton } from '../components/design-system/CTAButton';
import { PriceCard } from '../components/design-system/PriceCard';
import { TestimonialCard } from '../components/design-system/TestimonialCard';
import { FeatureIcon } from '../components/design-system/FeatureIcon';
import { LoadingSpinner } from '../components/design-system/LoadingSpinner';
import { Typography } from '../components/design-system/Typography';
import { Truck, Shield, Clock, Zap, Heart, Award } from 'lucide-react';

const DesignSystem = () => {
  return (
    <div className="min-h-screen bg-hill-gray py-8">
      <div className="container mx-auto px-4 space-y-16">
        
        {/* Header */}
        <div className="text-center">
          <Typography variant="h1" className="mb-4">
            HILL-Clear Design System
          </Typography>
          <Typography variant="body" color="secondary" className="max-w-2xl mx-auto">
            Ein einheitliches Design System für die Heizöl-Website mit modernen Komponenten,
            konsistenter Typografie und durchdachten Animationen.
          </Typography>
        </div>

        {/* Farbpalette */}
        <section>
          <Typography variant="h2" className="mb-8">Farbpalette</Typography>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <div className="w-full h-20 bg-hill-green rounded-lg shadow-soft"></div>
              <div className="text-center">
                <p className="font-semibold">Primär</p>
                <p className="text-sm text-hill-text-light">#006b51</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-white border border-gray-200 rounded-lg shadow-soft"></div>
              <div className="text-center">
                <p className="font-semibold">Sekundär</p>
                <p className="text-sm text-hill-text-light">#ffffff</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-hill-gray rounded-lg shadow-soft"></div>
              <div className="text-center">
                <p className="font-semibold">Akzent</p>
                <p className="text-sm text-hill-text-light">#f8f9fa</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-hill-text rounded-lg shadow-soft"></div>
              <div className="text-center">
                <p className="font-semibold">Text</p>
                <p className="text-sm text-hill-text-light">#212529</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-hill-success rounded-lg shadow-soft"></div>
              <div className="text-center">
                <p className="font-semibold">Erfolg</p>
                <p className="text-sm text-hill-text-light">#28a745</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typografie */}
        <section>
          <Typography variant="h2" className="mb-8">Typografie</Typography>
          <div className="space-y-6 bg-white p-8 rounded-lg shadow-soft">
            <Typography variant="h1">Überschrift H1 - Modern & Bold</Typography>
            <Typography variant="h2">Überschrift H2 - Strukturiert</Typography>
            <Typography variant="h3">Überschrift H3 - Klar</Typography>
            <Typography variant="h4">Überschrift H4 - Lesbar</Typography>
            <Typography variant="body">
              Fließtext - Gut lesbare Sans-Serif Schrift für optimale Lesbarkeit 
              auf allen Geräten. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="caption" color="secondary">
              Caption Text - Für zusätzliche Informationen
            </Typography>
            <Typography variant="overline">
              Overline Text - Für Labels
            </Typography>
          </div>
        </section>

        {/* CTA Buttons */}
        <section>
          <Typography variant="h2" className="mb-8">CTA Buttons</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <CTAButton variant="primary" size="lg" showArrow>
                Primary Button
              </CTAButton>
              <CTAButton variant="primary" size="md">
                Medium Button
              </CTAButton>
              <CTAButton variant="primary" size="sm">
                Small Button
              </CTAButton>
            </div>
            <div className="space-y-4">
              <CTAButton variant="secondary" size="lg">
                Secondary Button
              </CTAButton>
              <CTAButton variant="outline" size="md">
                Outline Button
              </CTAButton>
              <CTAButton variant="ghost" size="sm">
                Ghost Button
              </CTAButton>
            </div>
            <div className="space-y-4">
              <CTAButton variant="primary" loading size="md">
                Loading Button
              </CTAButton>
              <CTAButton variant="secondary" disabled size="md">
                Disabled Button
              </CTAButton>
              <CTAButton variant="primary" icon={<Zap />} size="md">
                With Icon
              </CTAButton>
            </div>
            <div className="space-y-4">
              <LoadingSpinner size="sm" />
              <LoadingSpinner size="md" />
              <LoadingSpinner size="lg" />
            </div>
          </div>
        </section>

        {/* Preiskarten */}
        <section>
          <Typography variant="h2" className="mb-8">Preiskarten</Typography>
          <div className="grid md:grid-cols-3 gap-6">
            <PriceCard
              title="Standard Heizöl"
              price={0.70}
              unit="Liter"
              features={[
                "DIN-geprüfte Qualität",
                "Kostenlose Lieferung",
                "2-3 Werktage Lieferzeit",
                "24/7 Support"
              ]}
              onOrder={() => console.log('Standard bestellt')}
            />
            <PriceCard
              title="Premium Heizöl"
              price={0.73}
              originalPrice={0.78}
              unit="Liter"
              popular={true}
              badge="Bestseller"
              features={[
                "Premium-Additive",
                "Verbesserte Brennleistung",
                "Kostenlose Lieferung",
                "Express-Lieferung möglich",
                "Priority Support"
              ]}
              onOrder={() => console.log('Premium bestellt')}
            />
            <PriceCard
              title="Eco Heizöl"
              price={0.75}
              unit="Liter"
              badge="Umweltfreundlich"
              features={[
                "Bio-Additive",
                "CO2-reduziert",
                "Nachhaltiger Brennstoff",
                "Kostenlose Lieferung"
              ]}
              onOrder={() => console.log('Eco bestellt')}
            />
          </div>
        </section>

        {/* Feature Icons */}
        <section>
          <Typography variant="h2" className="mb-8">Feature Icons</Typography>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <FeatureIcon
              icon={<Truck />}
              title="Schnelle Lieferung"
              description="2-3 Werktage"
              size="md"
            />
            <FeatureIcon
              icon={<Shield />}
              title="Geprüfte Qualität"
              description="DIN-Norm"
              variant="outlined"
              size="md"
            />
            <FeatureIcon
              icon={<Clock />}
              title="24/7 Service"
              description="Immer erreichbar"
              variant="minimal"
              size="md"
            />
            <FeatureIcon
              icon={<Zap />}
              title="Premium Power"
              description="Beste Leistung"
              size="md"
            />
            <FeatureIcon
              icon={<Heart />}
              title="Kundenzufriedenheit"
              description="Über 10.000 Kunden"
              variant="outlined"
              size="md"
            />
            <FeatureIcon
              icon={<Award />}
              title="Ausgezeichnet"
              description="Top Bewertungen"
              variant="minimal"
              size="md"
            />
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <Typography variant="h2" className="mb-8">Testimonials</Typography>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              name="Hans Mueller"
              location="München"
              rating={5}
              testimonial="Super Service! Schnelle Lieferung und faire Preise. Kann HILL-Clear nur weiterempfehlen."
              date="vor 2 Wochen"
            />
            <TestimonialCard
              name="Maria Schmidt"
              location="Augsburg"
              rating={5}
              testimonial="Zuverlässig und professionell. Die Qualität stimmt und der Kundenservice ist hervorragend."
              date="vor 1 Monat"
            />
            <TestimonialCard
              name="Klaus Weber"
              location="Nürnberg"
              rating={4}
              testimonial="Gute Erfahrung gemacht. Lieferung war pünktlich und das Heizöl von guter Qualität."
              date="vor 3 Wochen"
            />
          </div>
        </section>

        {/* Animationen Showcase */}
        <section>
          <Typography variant="h2" className="mb-8">Animationen</Typography>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-soft animate-fade-in">
              <Typography variant="h6" className="mb-2">Fade In</Typography>
              <Typography variant="caption" color="secondary">
                Smooth entry animation
              </Typography>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-soft animate-slide-up">
              <Typography variant="h6" className="mb-2">Slide Up</Typography>
              <Typography variant="caption" color="secondary">
                Upward motion effect
              </Typography>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-soft animate-scale-in">
              <Typography variant="h6" className="mb-2">Scale In</Typography>
              <Typography variant="caption" color="secondary">
                Zoom-in appearance
              </Typography>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-soft animate-float">
              <Typography variant="h6" className="mb-2">Float</Typography>
              <Typography variant="caption" color="secondary">
                Floating motion
              </Typography>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default DesignSystem;
