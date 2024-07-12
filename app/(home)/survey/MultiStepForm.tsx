import React, { useEffect, useState } from 'react';
import SmokerSummary from './(smoker)/SmokerCost';
import SmokerSurvey, { SmokerType } from './(smoker)/SmokerSurvey';
import InvestorSurvey from './(investor)/InvestorSurvey';
import InvestorSimulation from './(investor)/InvestorSimulation';

const MultistepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    startDate: new Date().toLocaleDateString('en-US'),
    cigarettesPerDay: 12,
    smokerType: SmokerType.sigarette,
    cigarettesPerPack: 20,
    packPrice: 5.00,
    filtersPackQuantity: 120,
    filtersPackPrice: 1.00,
    papersPackQuantity: 32,
    papersPackPrice: 1.00,
    tobaccoPackDuration: 18,
    tobaccoPackPrice: 3.50,
    monthlyRate: 0,
    totalCost: 0,
    variableRate: 1.50,
    fixedRate: 0,
    ter: 0.12,
    annualReturn: 4.50
  });

  useEffect(() => {
    const today = new Date();
    const lastYear = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());

    const formattedDate = lastYear.toISOString().split('T')[0];

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
      return <div />;
  }
};

export default MultistepForm;
