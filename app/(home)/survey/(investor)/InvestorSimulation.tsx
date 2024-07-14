import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { numberWithCommas } from '../(smoker)/SmokerCost';
import { PacType } from './InvestorSurvey';

interface Step1Props {
    prevStep: () => void;
    nextStep: () => void;
    values: {
        startDate: string
        cigarettesPerDay: number
        cigarettesPerPack: number
        packPrice: number
        totalCost: number
        monthlyCost: number
        pacType: PacType
        variableRate: number
        fixedRate: number
        TER: number
        annualReturn: number
    };
}

const InvestorSimulation: React.FC<Step1Props> = ({ prevStep, nextStep, values }) => {

    const depositQuantity = getMonthsDifference(new Date(values.startDate), new Date());
    const annualReturn = values.annualReturn; 
    const fixedRate = values.fixedRate;
    const TER = values.TER; 
    const variableRate = values.variableRate;
    const monthlyCost = parseFloat(values.monthlyCost.toFixed(2));
    const totalCost = monthlyCost*depositQuantity;

    const annualIncome = (annualReturn - TER) / 100;
    const menthlyReturn = annualIncome / 12;

    let capital = 0;
    let fundCost = 0;
    for (let i = 0; i < depositQuantity; i++) {
        capital += monthlyCost - fixedRate; 
        capital -= monthlyCost * variableRate / 100;
        let currentCapital = capital;
        currentCapital *= (1 + (annualReturn / 100) / 12);
        fundCost += currentCapital * (TER / 100) / 12;
        capital *= (1 + menthlyReturn);
    }

    const pacCost = (monthlyCost / 100 * variableRate) * depositQuantity + fixedRate * depositQuantity;
    
    const investmentYears = Math.ceil(depositQuantity/12*10)/10;

    return (
        <>
            <Row className='justify-content-center'>
                <Col sm={8} md={8} lg={6} xl={4} xxl={2}>
                    <Row>
                        <Col>
                            <h4>Risultato PAC in ETF:</h4>
                            <br></br>
                            <p>Importo mensile investito: €{numberWithCommas(monthlyCost.toFixed(2))}</p>
                            <p>Importo totale investito: €{numberWithCommas(totalCost.toFixed(2))}</p>
                            <p>Capitale non investito (scarto): €{numberWithCommas((capital-values.totalCost).toFixed(2))}</p>
                            <p className='text-green-600'>Incremento di valore: €{numberWithCommas((capital-totalCost+pacCost+fundCost).toFixed(2))}</p>
                            <p>Orizzonte investimento: {depositQuantity} mes{depositQuantity>1 ? <>i</> : <>e</>} (~{investmentYears} ann{investmentYears>1 ? <>i</> : <>o</>})</p>
                            <p className='text-red-600'>Costi del PAC: €{numberWithCommas(pacCost.toFixed(2))}</p>
                            <p className='text-red-600'>Costo del fondo: €{numberWithCommas(fundCost.toFixed(2))}</p>
                            <p><b>Risultato (al netto dei costi): €{numberWithCommas(capital.toFixed(2))}</b></p>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col className='text-center'>
                            <Button variant="secondary" onClick={prevStep}>
                                Indietro
                            </Button>
                        </Col>
                        <Col className='text-center'>
                            <Button variant="primary" onClick={nextStep}>
                                Investi
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

function getMonthsDifference(date1: Date, date2: Date): number {
    let months: number;
    months = (date2.getFullYear() - date1.getFullYear()) * 12;
    months -= date1.getMonth();
    months += date2.getMonth();
    return months <= 0 ? 0 : months;
}

export default InvestorSimulation