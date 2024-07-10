import { Col, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
                <Row className="align-items-center vh-100">
                    <Col>
                        {children}
                    </Col>
                </Row>
            <Footer />
        </>
    );
  }