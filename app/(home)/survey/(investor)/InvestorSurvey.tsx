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
        monthlyRate: number
        variableRate: number
        fixedRate: number
        ter: number,
        annualReturn: number
    };
}

const InvestorSurvey: React.FC<Step1Props> = ({ prevStep, nextStep, handleChange, values }) => {

    return (
        <>
            <Row className='justify-content-center'>
                <Col sm={8} md={6} lg={4}>
                    <Row>
                        <Col>
                            <h4>Calcolatore PAC in ETF:</h4>
                            <br />
                            <p>Risparmio mensile investito: €{numberWithCommas(values.monthlyRate.toFixed(2))}</p>
                        </Col>
                    </Row>
                    <p>Scegli l&apos;ETF del PAC:</p>
                    <Tabs
                        defaultActiveKey="custom"
                        id="uncontrolled-tab-example"
                        className="mb-3">
                        <Tab eventKey="custom" title="Inventato">
                            <Row>
                                <Col>
                                    <Form.Label>Commissioni variabili:</Form.Label>
                                    <InputGroup>
                                        <Form.Control 
                                            type="number" 
                                            value={values.variableRate}
                                            onChange={handleChange}
                                            name="variableRate"
                                        />
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
                                            name="fixedRate"
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col>
                                    <Form.Label>Costi annuali fondo (TER):</Form.Label>
                                    <InputGroup>
                                        <Form.Control 
                                            type="number" 
                                            value={values.ter}
                                            onChange={handleChange}
                                            name="ter"
                                        />
                                        <InputGroup.Text>%</InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col>
                                    <Form.Label>Rendimento annuo:</Form.Label>
                                    <InputGroup>
                                        <Form.Control 
                                            type="number" 
                                            value={values.annualReturn}
                                            onChange={handleChange}
                                            name="annualReturn"
                                        />
                                        <InputGroup.Text>%</InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="real" title="Reale">
                        </Tab>
                    </Tabs>
                    
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
                </Col>
            </Row>
        </>
    )
}

export default InvestorSurvey