
export const scrollToCalculator = () => {
  const calculatorElement = document.getElementById('price-calculator');
  if (calculatorElement) {
    calculatorElement.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    // If not on home page, navigate to home page with calculator hash
    window.location.href = '/#price-calculator';
  }
};

export const scrollToCalculatorFromOtherPage = () => {
  // For navigation from other pages
  window.location.href = '/#price-calculator';
};
