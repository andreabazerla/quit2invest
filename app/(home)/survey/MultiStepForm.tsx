import React, { useState } from 'react';
import SmokerStartDate from './SmokerStartDate';
import SmokerCigarettesPerDay from './SmokerCigarettesPerDay';

const MultistepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
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
    default:
      return <div />;
  }
};

export default MultistepForm;
