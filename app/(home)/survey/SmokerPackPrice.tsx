import React from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

interface Step1Props {
    prevStep: () => void;
    nextStep: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: {
        packPrice: number;
    };
}

const SmokerPackPrice: React.FC<Step1Props> = ({ prevStep, nextStep, handleChange, values }) => {

    return (
        <>
            <Row className='justify-content-center'>
                <Col sm={8} md={6} lg={4}>
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

export default SmokerPackPrice