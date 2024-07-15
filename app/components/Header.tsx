import { Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <header style={{height:'15vh'}}>
      <Row className='justify-content-center'>
        <Col sm={12} md={10} lg={8} xl={6} xxl={3} className='mx-auto'>
          <h1>Quit2Invest</h1>
          <h5>Smetti di fumare ed inizia a investire!</h5>
        </Col>
      </Row>
    </header>
  );
};

export default Header;