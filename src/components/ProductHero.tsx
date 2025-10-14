
import { Button } from "@/components/ui/button";
import { scrollToCalculatorFromOtherPage } from '../utils/scrollToCalculator';

const ProductHero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Unsere Heizöl-Produkte
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Hochwertige Heizöl-Qualitäten für jeden Bedarf - von bewährter Standard-Qualität 
          bis hin zu Premium-Heizöl mit modernsten Additiven.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToCalculatorFromOtherPage}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 text-lg"
          >
            Jetzt bestellen
          </Button>
          <a href="tel:089244189180">
            <Button 
              variant="outline" 
              className="border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-3 text-lg"
            >
              Beratung anfordern
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
