import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { SmokerType } from './SmokerSurvey';

interface Step1Props {
    prevStep: () => void;
    nextStep: () => void;
    values: {
        startDate: string,
        cigarettesPerDay: number,
        cigarettesPerPack: number,
        smokerType: SmokerType,
        packPrice: number,
        filtersPackQuantity: number,
        filtersPackPrice: number,
        papersPackQuantity: number,
        papersPackPrice: number,
        tobaccoPackDuration: number,
        tobaccoPackPrice: number,
        monthlyCost: number,
        totalCost: number
    };
}

const SmokerSummary: React.FC<Step1Props> = ({ prevStep, nextStep, values }) => {

    const today = new Date();
    const diff = Math.abs(today.getTime() - new Date(values.startDate).getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
    
    const cigarettesSmoked = (diffDays+1) * values.cigarettesPerDay; 
    let cost = 0;
    if (values.smokerType === SmokerType.SIGARETTE) {
        const packsBought = Math.ceil(cigarettesSmoked / values.cigarettesPerPack);
        cost = Math.round(Math.max(packsBought * values.packPrice, values.packPrice) * 100) / 100;
    } else {
        const filtersPackQuantity = Math.ceil(cigarettesSmoked / values.filtersPackQuantity);
        const filtersPackCost = Math.round(Math.max(filtersPackQuantity * values.filtersPackPrice, values.filtersPackPrice) * 100) / 100;
        const papersPackQuantity = Math.ceil(cigarettesSmoked / values.papersPackQuantity);
        const papersPackCost = Math.round(Math.max(papersPackQuantity * values.papersPackPrice, values.papersPackPrice) * 100) / 100;
        const tobaccoPackQuantity = Math.max(Math.ceil(diffDays / values.tobaccoPackDuration), 1);
        const tobaccoPackCost = Math.round(Math.max(tobaccoPackQuantity * values.tobaccoPackPrice, values.tobaccoPackPrice) * 100) / 100;
        cost = Math.round(Math.max(filtersPackCost + papersPackCost + tobaccoPackCost) * 100) / 100;
    }
    
    const annualCost = Math.min(cost / (diffDays/365), cost);
    const monthlyCost = Math.min((cost / (diffDays/365))/12, cost);

    values.monthlyCost = monthlyCost;
    values.totalCost = cost;

    return (
        <>
            <Row>
                <Col sm={8} md={6} lg={4}>
                    <Row>
                        <Col>
                            <h4>Spese calcolate:</h4>
                            <br></br>
                            <p><b>Totale soldi spesi: €{numberWithCommas(cost.toFixed(2))}</b></p>
                            <p>Soldi spesi all&apos;anno: €{numberWithCommas(annualCost.toFixed(2))}</p>
                            <p>Soldi spesi al mese: €{numberWithCommas(monthlyCost.toFixed(2))}</p>
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

export const numberWithCommas = (x: string) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default SmokerSummary