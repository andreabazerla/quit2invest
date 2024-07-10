import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Row>
        <Col className="text-center">
          <p>&copy; {new Date().getFullYear().toString()} by Andrea Bazerla</p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;