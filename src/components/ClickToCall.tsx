
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ClickToCallProps {
  phoneNumber?: string;
  variant?: 'floating' | 'inline' | 'header';
  className?: string;
}

const ClickToCall = ({ 
  phoneNumber = "089244189180", 
  variant = 'inline',
  className = "" 
}: ClickToCallProps) => {
  const formatPhoneNumber = (phone: string) => {
    return phone.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1 $2 $3 $4');
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hallo! Ich interessiere mich für Heizöl und hätte gerne ein Angebot.");
    window.open(`https://wa.me/49${phoneNumber.substring(1)}?text=${message}`, '_blank');
  };

  if (variant === 'floating') {
    return (
      <div className="fixed bottom-20 right-4 z-50 flex flex-col space-y-2 lg:hidden">
        <Button
          onClick={handleCall}
          className="w-14 h-14 rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          aria-label="Anrufen"
        >
          <Phone size={24} />
        </Button>
      </div>
    );
  }

  if (variant === 'header') {
    return (
      <a
        href={`tel:${phoneNumber}`}
        className={`inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors ${className}`}
      >
        <Phone size={16} />
        <span className="font-medium">{formatPhoneNumber(phoneNumber)}</span>
      </a>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Button
        onClick={handleCall}
        className="bg-primary-600 hover:bg-primary-700 text-white min-h-[48px] flex-1"
      >
        <Phone size={20} className="mr-2" />
        Jetzt anrufen
      </Button>
      <Button
        onClick={handleWhatsApp}
        variant="outline"
        className="border-green-500 text-green-600 hover:bg-green-50 min-h-[48px] flex-1"
      >
        <MessageCircle size={20} className="mr-2" />
        WhatsApp
      </Button>
    </div>
  );
};

export default ClickToCall;
