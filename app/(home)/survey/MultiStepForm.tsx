import React, { useState } from 'react';
import SmokerSummary from './(smoker)/SmokerCost';
import SmokerSurvey from './(smoker)/SmokerSurvey';
import Home from '../page';

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
      return <SmokerSurvey nextStep={nextStep} handleChange={handleChange} values={formValues} />
    case 2:
      return <SmokerSummary prevStep={prevStep} nextStep={nextStep} values={formValues} />;
    default:
      return <div />;
  }
};

export default MultistepForm;
