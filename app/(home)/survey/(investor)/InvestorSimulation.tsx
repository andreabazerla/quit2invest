import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { numberWithCommas } from '../(smoker)/SmokerCost';

interface Step1Props {
    prevStep: () => void;
    nextStep: () => void;
    values: {
        startDate: string,
        cigarettesPerDay: number,
        cigarettesPerPack: number,
        packPrice: number,
        monthlyRate: number,
        totalCost: number
    };
}

const InvestorSimulation: React.FC<Step1Props> = ({ prevStep, nextStep, values }) => {

    const diffMonths = getMonthsDifference(new Date(values.startDate), new Date())

    return (
        <>
            <Row className='justify-content-center'>
                <Col sm={8} md={6} lg={4}>
                    <Row>
                        <Col>
                            <h4>Risultato simulazione PAC in ETF:</h4>
                            <br></br>
                            <p>Risparmio mensile investito: €{numberWithCommas(values.monthlyRate.toFixed(2))}</p>
                            <p>Importo totale investito: €{numberWithCommas(values.totalCost.toFixed(2))}</p>
                            <p>Orizzonte investimento in mesi: {diffMonths} (~{Math.round(diffMonths/12*10)/10} anno/i)</p>
                            <p>Costi del PAC: €{numberWithCommas('0')}</p>
                            <p>Costo del fondo: €{numberWithCommas('0')}</p>
                            <p><b>Risultato (al netto dei costi): €{numberWithCommas('0')}</b></p>
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