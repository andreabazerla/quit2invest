import { Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Row className="">
        <Col xs={12}>
          <h1>Quit&Invest</h1>
          <h5>Smetti di fumare ed inizia a investire!</h5>
        </Col>
      </Row>
    </header>
  );
};

export default Header;