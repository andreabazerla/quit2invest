import Link from 'next/link';
import React from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

interface Step1Props {
    nextStep: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: {
        startDate: string
        cigarettesPerDay: number
        smokerType: SmokerType
        cigarettesPerPack: number
        packPrice: number
        filtersPackQuantity: number
        filtersPackPrice: number
        papersPackQuantity: number
        papersPackPrice: number
        tobaccoPackDuration: number
        tobaccoPackPrice: number
    };
}

export enum SmokerType {
    SIGARETTE = 'sigarette', 
    TRINCIATO = 'trinciato'
}

const SmokerSurvey: React.FC<Step1Props> = ({ nextStep, handleChange, values }) => {

    return (
        <>
            <Row className='justify-content-center'>
                <Col sm={8} md={8} lg={6} xl={4} xxl={2}>
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
                        <Form.Label>Cosa fumi di solito?</Form.Label>
                        <Col>
                            <Form.Check
                                inline
                                value={SmokerType.SIGARETTE}
                                label="Sigarette"
                                name="smokerType"
                                type='radio'
                                onChange={handleChange}
                                checked={values.smokerType == SmokerType.SIGARETTE}
                            />
                            <Form.Check
                                inline
                                value={SmokerType.TRINCIATO}
                                label="Trinciato"
                                name="smokerType"
                                type='radio'
                                onChange={handleChange}
                                checked={values.smokerType == SmokerType.TRINCIATO}
                            />
                        </Col>
                    </Row>
                    <br></br>
                    {values.smokerType === SmokerType.SIGARETTE
                        ? (
                            <>
                                <Row>
                                    <Col>
                                        <Form.Label>Quante sigarette ci sono in ogni pacchetto?</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={values.cigarettesPerPack}
                                            onChange={handleChange}
                                            name="cigarettesPerPack" />
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
                                                name="packPrice" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </>
                        )
                        : (
                            <>
                                <Row>
                                    <Col>
                                        <Form.Label>Quanti filtrini sono contenuti nei pacchetti che compri?</Form.Label>
                                        <Form.Control 
                                            type="number" 
                                            value={values.filtersPackQuantity}
                                            onChange={handleChange}
                                            name="filtersPackQuantity"
                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row>
                                    <Col>
                                        <Form.Label>Quanto costa un pacchetto di filtrini?</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>€</InputGroup.Text>
                                            <Form.Control
                                                type="number"
                                                value={values.filtersPackPrice}
                                                onChange={handleChange}
                                                name="filtersPackPrice" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row>
                                    <Col>
                                        <Form.Label>Quante cartine sono contenute nei pacchetti?</Form.Label>
                                        <Form.Control 
                                            type="number" 
                                            value={values.papersPackQuantity}
                                            onChange={handleChange}
                                            name="papersPackQuantity"
                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row>
                                    <Col>
                                        <Form.Label>Quanto costa un pacchetto di cartine?</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>€</InputGroup.Text>
                                            <Form.Control
                                                type="number"
                                                value={values.papersPackPrice}
                                                onChange={handleChange}
                                                name="papersPackPrice" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row>
                                    <Col>
                                        <Form.Label>Ogni quanti giorni compri un pacchetto di tabacco?</Form.Label>
                                        <Form.Control 
                                            type="number" 
                                            value={values.tobaccoPackDuration}
                                            onChange={handleChange}
                                            name="tobaccoPackDuration"
                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row>
                                    <Col>
                                        <Form.Label>Quanto costa un pacchetto di tabacco?</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>€</InputGroup.Text>
                                            <Form.Control
                                                type="number"
                                                value={values.tobaccoPackPrice}
                                                onChange={handleChange}
                                                name="tobaccoPackPrice" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </>
                        )
                    }
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
                                Calcola
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

export default SmokerSurvey