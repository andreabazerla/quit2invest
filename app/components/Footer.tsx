import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{position:'fixed', height:'50px', bottom:'0', width:'100%', padding:'15px 0 15px 0', background:'white'}}>
      <Row>
        <Col style={{padding:0}}>
          <p className="text-center" style={{margin:0}}>&copy; {new Date().getFullYear().toString()} <a href='https://www.linkedin.com/in/andreabazerla/' target='_blank'>Andrea Bazerla</a></p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;