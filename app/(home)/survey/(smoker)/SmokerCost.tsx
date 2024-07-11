import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';

interface Step1Props {
    prevStep: () => void;
    nextStep: () => void;
    values: {
        startDate: string,
        cigarettesPerDay: number,
        cigarettesPerPack: number,
        packPrice: number
    };
}

const SmokerSummary: React.FC<Step1Props> = ({ prevStep, nextStep, values }) => {

    const startDateFormatted = new Date(values.startDate).toLocaleDateString('it-IT', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    var today = new Date();
    var diff = Math.abs(today.getTime() - new Date(values.startDate).getTime());
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
    let cost = Math.max(diffDays * values.cigarettesPerDay / values.cigarettesPerPack * values.packPrice, values.packPrice);
    cost = Math.round(cost * 100) / 100;

    return (
        <>
            <Row className='justify-content-center'>
                <Col sm={8} md={6} lg={4}>
                    <Row>
                        <Col>
                            <h4>Spese calcolate:</h4>
                            <br></br>
                            <p><b>Totale soldi spesi: €{numberWithCommas(cost.toFixed(2))}</b></p>
                            <p>Soldi spesi all&apos;anno: €{numberWithCommas(Math.min((cost / (diffDays/365)), cost).toFixed(2))}</p>
                            <p>Soldi spesi al mese: €{numberWithCommas(Math.min(((cost / (diffDays/365)/12)), cost).toFixed(2))}</p>
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
                                Continua
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

const numberWithCommas = (x: string) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default SmokerSummary