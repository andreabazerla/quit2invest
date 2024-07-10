'use client'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SmokerData from '../../smokerData';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SmokerStartDate from './SmokerStartDate';

export default function Survey() {

    const [smokerData, setSmokerData] = useState<SmokerData>({
        startDate: new Date(),
        cigarettePerDay: 0,
        cigarettePerPack: 0,
        pricePack: 0
    });

    const [step, setStep] = useState(0);

    const stepList = [
      <SmokerStartDate data={undefined} handleChange={undefined} />
    ]
  
    const [startDate, setStartDate] = useState('');
   
    const handleDateChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setStartDate(e.target.value);
      console.log(startDate);
    };

    return (
        <>
            {
                stepList[step]
            }
            <br></br>
            <Row>
                <Col xs={6}>
                    <Button variant="secondary">Indietro</Button>
                </Col>
                <Col xs={6}>
                    <Button variant="primary">Prosegui</Button>
                </Col>
            </Row>
        </>
    );
}