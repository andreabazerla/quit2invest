import Link from "next/link";
import { Button, Col, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Row className='justify-content-center'>
        <Col sm={8} md={8} lg={6} xl={4} xxl={3}>
            <Row>
                <Col>
                    <p>Fai un test per capire quanto avresti potuto guadagnare se al posto di fumare avessi investito nel tuo futuro</p>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col className='text-center'>
                  <Link href='survey'>
                      <Button variant='primary'>Calcola</Button>
                  </Link>
                </Col>
            </Row>
        </Col>
      </Row>
    </>
  );
}