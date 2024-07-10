import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

interface Step1Props {
    prevStep: () => void;
    nextStep: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: {
        cigarettesPerPack: number;
    };
}

const SmokerCigarettesPerPack: React.FC<Step1Props> = ({ prevStep, nextStep, handleChange, values }) => {

    return (
        <>
            <Row className='justify-content-center'>
                <Col sm={8} md={6} lg={4}>
                    <Row>
                        <Col>
                            <Form.Label>Quante sigarette ci sono in ogni pacchetto?</Form.Label>
                            <Form.Control
                                type="number" 
                                value={values.cigarettesPerPack}
                                onChange={handleChange}
                                name="cigarettePerPack"
                            />
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

export default SmokerCigarettesPerPack