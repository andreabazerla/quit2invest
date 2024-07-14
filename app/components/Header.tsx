import { Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <header style={{height:'15vh'}}>
      <Row className='justify-content-center'>
        <Col sm={8} md={8} lg={6} xl={4} xxl={2}>
          <h1>Quit2Invest</h1>
          <h5>Smetti di fumare ed inizia a investire!</h5>
        </Col>
      </Row>
    </header>
  );
};

export default Header;