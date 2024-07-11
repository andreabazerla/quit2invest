import Link from 'next/link';
import React from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

interface Step1Props {
    nextStep: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: {
        startDate: string
        cigarettesPerDay: number
        cigarettesPerPack: number
        packPrice: number
    };
}

const SmokerSurvey: React.FC<Step1Props> = ({ nextStep, handleChange, values }) => {

    return (
        <>
            <Row className='justify-content-center'>
                <Col sm={8} md={6} lg={4}>
                    <Row>
                        <Col>
                            <h4>Inserisci i dati:</h4>
                            <br></br>
                            <Form.Label>Quando hai iniziato a fumare?</Form.Label>
                            <Form.Control
                                type="date"
                                value={values.startDate}
                                onChange={handleChange}
                                name="startDate"
                             />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Form.Label>Quante sigarette fumi al giorno?</Form.Label>
                            <Form.Control 
                                type="number" 
                                value={values.cigarettesPerDay}
                                onChange={handleChange}
                                name="cigarettesPerDay"
                            />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Form.Label>Quante sigarette ci sono in ogni pacchetto?</Form.Label>
                            <Form.Control
                                type="number"
                                value={values.cigarettesPerPack}
                                onChange={handleChange}
                                name="cigarettesPerPack"
                            />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Form.Label>Quale è il prezzo del pacchetto di sigarette che fumi?</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>€</InputGroup.Text>
                                <Form.Control 
                                    type="number"
                                    value={values.packPrice}
                                    onChange={handleChange}
                                    name="packPrice"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col className='text-center'>
                            <Link href="/">
                                <Button variant="secondary">
                                    Indietro
                                </Button>
                            </Link>
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

export default SmokerSurvey