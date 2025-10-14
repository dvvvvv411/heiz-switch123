
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import ReviewsSection from '../components/ReviewsSection';
import CompanySection from '../components/CompanySection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ReviewsSection />
      <CompanySection />
      <Footer />
    </div>
  );
};

export default Index;
