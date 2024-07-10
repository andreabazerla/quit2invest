import { Button, Col, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={4}>
            <Row>
                <Col>
                    <p>Fai un test per capire quanto avresti potuto guadagnare se al posto di fumare avessi investito nel tuo futuro</p>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col className='text-center'>
                    <Button href='survey' variant='primary'>Calcola</Button>
                </Col>
            </Row>
        </Col>
      </Row>
    </>
  );
}