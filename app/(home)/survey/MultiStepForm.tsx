import React, { useState } from 'react';
import SmokerStartDate from './SmokerStartDate';
import SmokerCigarettesPerDay from './SmokerCigarettesPerDay';
import SmokerCigarettesPerPack from './SmokerCigarettesPerPack';
import SmokerPackPrice from './SmokerPackPrice';
import SmokerSummary from './SmokerSummary';

const MultistepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    startDate: '',
    cigarettesPerDay: 12,
    cigarettesPerPack: 20,
    packPrice: 5.00
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  switch (step) {
    case 1:
      return <SmokerStartDate nextStep={nextStep} handleChange={handleChange} values={formValues} />;
    case 2:
      return <SmokerCigarettesPerDay prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />;
    case 3:
      return <SmokerCigarettesPerPack prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />;
    case 4:
      return <SmokerPackPrice prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />;
    case 5:
      return <SmokerSummary prevStep={prevStep} nextStep={nextStep} values={formValues} />;
    default:
      return <div />;
  }
};

export default MultistepForm;
