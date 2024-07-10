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
    let cost = Math.max((diffDays+1) * values.cigarettesPerDay / values.cigarettesPerPack * values.packPrice, values.packPrice);
    cost = Math.round(cost * 100) / 100;

    return (
        <>
            <Row className='justify-content-center'>
                <Col sm={8} md={6} lg={4}>
                    <Row>
                        <Col>
                            <h5>Riassunto:</h5>
                            <br></br>
                            <p>Data della prima sigaretta fumata: {startDateFormatted}</p>
                            <p>Numero di sigarette fumate al giorno: {values.cigarettesPerDay}</p>
                            <p>Quantità di sigarette presenti in un pacchetto: {values.cigarettesPerPack}</p>
                            <p>Prezzo di un singolo pacchetto di sigarette: €{values.packPrice}</p>
                            <br></br>
                            <p>
                                <b>Totale soldi spesi: €{cost.toFixed(2)}</b>
                            </p>
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

export default SmokerSummary