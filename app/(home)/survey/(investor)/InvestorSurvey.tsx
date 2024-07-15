import Link from 'next/link';
import React from 'react'
import { Button, Col, Form, InputGroup, Row, Tab, Tabs } from 'react-bootstrap';
import { numberWithCommas } from '../(smoker)/SmokerCost';

interface Step1Props {
    prevStep: () => void;
    nextStep: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: {
        startDate: string
        cigarettesPerDay: number
        cigarettesPerPack: number
        packPrice: number
        pacType: PacType
        monthlyCost: number
        variableRate: number
        fixedRate: number
        TER: number
        annualReturn: number
    };
}

export enum PacType {
    CUSTOM = 'custom',
    REAL = 'real'
}

const InvestorSurvey: React.FC<Step1Props> = ({ prevStep, nextStep, handleChange, values }) => {

    return (
        <>
            <Row className='justify-content-center'>
                <Col sm={8} md={8} lg={6} xl={4} xxl={2}>
                    <Row>
                        <Col>
                            <h4>Calcolatore PAC in ETF:</h4>
                            <br />
                            <p>Risparmio mensile investito: €{numberWithCommas(values.monthlyCost.toFixed(2))}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Form.Label>Crea l&apos;ETF del PAC:</Form.Label>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label>Commissioni variabili:</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="number"
                                    value={values.variableRate}
                                    onChange={handleChange}
                                    name="variableRate" />
                                <InputGroup.Text>%</InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Form.Label>Commissioni fisse:</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>€</InputGroup.Text>
                                <Form.Control
                                    type="number"
                                    value={values.fixedRate}
                                    onChange={handleChange}
                                    name="fixedRate" />
                            </InputGroup>
                        </Col>
                    </Row><br></br><Row>
                        <Col>
                            <Form.Label>Costi annuali fondo (TER):</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="number"
                                    value={values.TER}
                                    onChange={handleChange}
                                    name="TER" />
                                <InputGroup.Text>%</InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row><br></br><Row>
                        <Col>
                            <Form.Label>Rendimento annuo:</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="number"
                                    value={values.annualReturn}
                                    onChange={handleChange}
                                    name="annualReturn" />
                                <InputGroup.Text>%</InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <br></br>
                    <br></br>

                    <Row>
                        <Col className='text-center'>
                            <Button variant="secondary" onClick={prevStep}>
                                Indietro
                            </Button>
                        </Col>
                        <Col className='text-center'>
                            <Button variant="primary" onClick={nextStep}>
                                Simula
                            </Button>
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </Col>
            </Row>
        </>
    )
}

export default InvestorSurvey