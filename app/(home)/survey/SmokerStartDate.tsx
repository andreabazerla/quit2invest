import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

interface Step1Props {
    nextStep: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: {
        firstName: string;
    };
}

const SmokerStartDate: React.FC<Step1Props> = ({ nextStep, handleChange, values }) => {

    return (
        <>
            <Row className='justify-content-center'>
                <Col sm={8} md={6} lg={4}>
                    <Row>
                        <Col>
                            <Form.Label>Quando hai iniziato a fumare?</Form.Label>
                            <Form.Control type="date" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col></Col>
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

export default SmokerStartDate