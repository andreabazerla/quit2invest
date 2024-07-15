import React, { useEffect, useState } from 'react';
import SmokerSummary from './(smoker)/SmokerCost';
import SmokerSurvey, { SmokerType } from './(smoker)/SmokerSurvey';
import InvestorSurvey, { PacType } from './(investor)/InvestorSurvey';
import InvestorSimulation from './(investor)/InvestorSimulation';

const MultistepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    startDate: new Date().toLocaleDateString('en-CA'),
    cigarettesPerDay: 12,
    smokerType: SmokerType.SIGARETTE,
    cigarettesPerPack: 20,
    packPrice: 5.00,
    filtersPackQuantity: 120,
    filtersPackPrice: 1.00,
    papersPackQuantity: 32,
    papersPackPrice: 1.00,
    tobaccoPackDuration: 18,
    tobaccoPackPrice: 3.50,
    monthlyCost: 0,
    totalCost: 0,
    pacType: PacType.CUSTOM,
    variableRate: 1.50,
    fixedRate: 0,
    TER: 0.12,
    annualReturn: 4.50,
  });

  useEffect(() => {
    const today = new Date();
    const lastYear = new Date(today.getFullYear() - 10, today.getMonth(), today.getDate());

    const formattedDate = lastYear.toLocaleDateString('en-CA').split('T')[0];

    setFormValues(prevState => ({
      ...prevState,
      startDate: formattedDate,
    }));
  }, []);

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

    console.log(e.target.name, e.target.value)
  };

  switch (step) {
    case 1:
      return <SmokerSurvey nextStep={nextStep} handleChange={handleChange} values={formValues} />
    case 2:
      return <SmokerSummary prevStep={prevStep} nextStep={nextStep} values={formValues} />;
    case 3:
      return <InvestorSurvey prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />;
    case 4:
      return <InvestorSimulation prevStep={prevStep} nextStep={nextStep} values={formValues} />;
    default:
      return <></>;
  }
};

export default MultistepForm;
