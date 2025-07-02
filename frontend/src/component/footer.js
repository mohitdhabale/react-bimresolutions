import { Button, Col, Container, Row } from "react-bootstrap"
import { useEffect } from "react";

import "../css/footer.css"

import Aos from "aos";
import "aos/dist/aos.css";

import footer_img from "../assets/footer-3.jpg"

function Footer() {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }
    );

    return (
        <>
            <Container fluid style={{ marginTop: "20px" }}>

                <Row>
                    <Col data-aos="fade-up" style={{
                        overflow: 'hidden',
                    }}>

                        <Row>
                            <Col md={6} >
                                <div style={{ width: "110%" }}>
                                    <img className="footer-bkg-img" src={footer_img} alt="" />
                                </div>
                            </Col>

                            <Col md={6} style={{ backgroundColor: "black" }}>
                                <Row>
                                    <Col className="footer-contact-section">
                                        <div id="footer-contact-sec-div">

                                            <p style={{
                                                color: "white",
                                                fontWeight: "300",
                                                letterSpacing: "0.4em"
                                            }}> CONTACT</p>

                                            <p style={{
                                                color: "white",
                                                fontSize: "50px",
                                                fontWeight: "700"
                                            }}>Get In Touch</p>

                                            <p className="footer-contact-detail">⚲ 1745/B/936, Kundanlal Gupta Nagar, Kalamna Ring Road, Nagpur, 440017</p>

                                            <p className="footer-contact-detail">✆ +91 8788941737</p>

                                            <p className="footer-contact-detail">@ bimsolution@gmail.com</p>

                                            <Button id="footer-get-direction-btn">Get Directions</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col style={{
                                background: "black",
                            }}>
                                <p style={{
                                    color: "white",
                                    padding: "20px 0",
                                    fontSize: "14px",
                                    textAlign: "center",
                                }}>© 2025. All Rights Reserved. Design by AMPLEMIND</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer