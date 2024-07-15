import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { numberWithCommas } from '../(smoker)/SmokerCost';
import { PacType } from './InvestorSurvey';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface Step1Props {
    prevStep: () => void;
    nextStep: () => void;
    values: {
        startDate: string
        cigarettesPerDay: number
        cigarettesPerPack: number
        packPrice: number
        totalCost: number
        monthlyCost: number
        pacType: PacType
        variableRate: number
        fixedRate: number
        TER: number
        annualReturn: number
    };
}

const InvestorSimulation: React.FC<Step1Props> = ({ prevStep, nextStep, values }) => {

    const startDate = new Date(values.startDate);
    const depositQuantity = getMonthsDifference(new Date(values.startDate), new Date());
    const annualReturn = values.annualReturn; 
    const fixedRate = values.fixedRate;
    const TER = values.TER; 
    const variableRate = values.variableRate;
    const monthlyCost = parseFloat(values.monthlyCost.toFixed(2));
    const totalCost = monthlyCost*depositQuantity;

    const annualIncome = (annualReturn - TER) / 100;
    const menthlyReturn = annualIncome / 12;

    let capital = 0;
    let fundCost = 0;
    let capitalHistory = [];
    let investmentHistory = [];
    let investmentCapital = 0;
    for (let i = 0; i < depositQuantity; i++) {
        capital += monthlyCost - fixedRate; 
        capital -= monthlyCost * variableRate / 100;
        let currentCapital = capital;
        currentCapital *= (1 + (annualReturn / 100) / 12);
        fundCost += currentCapital * (TER / 100) / 12;
        capital *= (1 + menthlyReturn);
        capitalHistory.push((Math.round(capital * 100) / 100).toFixed(2));
        investmentCapital += monthlyCost;
        investmentHistory.push((Math.round(investmentCapital * 100) / 100).toFixed(2));
    }

    const pacCost = (monthlyCost / 100 * variableRate) * depositQuantity + fixedRate * depositQuantity;
    
    const investmentYears = Math.ceil(depositQuantity/12*10)/10;

    let dateInizioMese = [];
    let data = [];
    for (let i = 0; i < depositQuantity; i++) {
        let formatter = new Intl.DateTimeFormat('it-IT', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });

        const dateLoop = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
        const formattedDate = formatter.format(dateLoop);
        dateInizioMese.push(formattedDate);
        startDate.setMonth(startDate.getMonth() + 1);
        data.push({name: dateInizioMese[i], uv: investmentHistory[i], pv: capitalHistory[i]});
    }

    const investmentCapitalMax = Math.max(investmentCapital);
    const capitalMax = Math.max(capital);
    const yAxisMax = Math.max(investmentCapitalMax, capitalMax);
    const newYAxisMax = (yAxisMax + yAxisMax/100*10);
    const factor = Math.pow(10, Math.round(newYAxisMax).toString().length-2);

    const incrementValue = capital-totalCost+pacCost+fundCost;
    const incrementPercentage = incrementValue*100/totalCost;
    const incrementFinalPercentage = (capital-totalCost)*100/totalCost;

    return (
        <>
            <Row>
                <Col sm={{span:8, offset:2}} lg={{span:6, offset:3}} xl={{span:4, offset:4}} xxl={{span: 2, offset:5}}>
                    <Row>
                        <Col>
                            <h4>Risultato PAC in ETF:</h4>
                            <br></br>
                            <p>Importo mensile investito: €{numberWithCommas(monthlyCost.toFixed(2))}</p>
                            <p>Importo totale investito: €{numberWithCommas(totalCost.toFixed(2))}</p>
                            <p>Capitale non investito (scarto): €{numberWithCommas((capital-values.totalCost).toFixed(2))}</p>
                            <p>Orizzonte investimento: {depositQuantity} mes{depositQuantity>1 ? <>i</> : <>e</>} (~{investmentYears} ann{investmentYears>1 ? <>i</> : <>o</>})</p>
                            <p className='text-green-600'>Incremento di valore: €{numberWithCommas(incrementValue.toFixed(2))} ({incrementPercentage>0 ? <>+</> : <>-</>}{incrementPercentage.toFixed(2)}%)</p>
                            <p className='text-red-600'>Costi del PAC: €{numberWithCommas(pacCost.toFixed(2))}</p>
                            <p className='text-red-600'>Costo del fondo: €{numberWithCommas(fundCost.toFixed(2))}</p>
                            <p><b>Risultato (al netto dei costi): €{numberWithCommas(capital.toFixed(2))} ({incrementFinalPercentage>0?<>+</>:<>-</>}{incrementFinalPercentage.toFixed(2)}%)</b></p>
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
                        </Col>
                    </Row>
                </Col>
                <Col sm={{span:12, offset:0}} md={{span:10, offset:1}} lg={{span:8, offset:2}} xl={{span:6, offset:3}} xxl={{span:4, offset:4}} style={{margin:'25px 0 50px 0'}}>
                    <ResponsiveContainer width="100%" height={500}>
                        <AreaChart
                            data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis domain={[0, Math.floor(newYAxisMax / factor) * factor]} tickCount={10} />
                            <Tooltip />
                            <Legend />
                            <Area name='Capitale raggiunto' dataKey="pv" stroke="#ff4500" fill="#ff4500" fillOpacity={1} />
                            <Area name='Importo investito' dataKey="uv" stroke="#6400ff" fill="#6400ff" fillOpacity={1} />
                        </AreaChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </>
    )
}

function getMonthsDifference(date1: Date, date2: Date): number {
    let months: number;
    months = (date2.getFullYear() - date1.getFullYear()) * 12;
    months -= date1.getMonth();
    months += date2.getMonth();
    return months <= 0 ? 0 : months;
}

export default InvestorSimulation