import { Col, Container, Row } from "react-bootstrap"
import { useEffect } from "react";

import "../css/about.css";

import Aos from "aos";
import "aos/dist/aos.css";

import about_main_img from "../assets/about-img.webp";
import our_vision_img from "../assets/our vision.jpg";
import our_mission_img from "../assets/our mission.jpg";



function About() {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }
    );
    return (
        <>
            <Container>
                <Row>
                    <Col style={{
                        overflow: "hidden",
                    }}>
                        <Row>
                            <Col md={6} xs={12} data-aos="fade-down">
                                <p style={{
                                    color: "black",
                                    marginTop: "10px",
                                    fontWeight: "bold",
                                }}>About Us</p>

                                <p style={{
                                    color: "black",
                                    fontSize: "18px",
                                }}>BIM Solutions is a technology consulting firm working to provide state-of-the-art technology solutions to the Architecture, Engineering and Construction (AEC) sector.
                                    Our services include Technology Consulting, Lifecycle BIM Implementation, BIM & Technology Integration, BIM Automation Solutions and Custom Software Development.
                                </p>
                            </Col>

                            <Col data-aos="fade-left" >
                                <div>
                                    <img className="about-pg-img" src={about_main_img} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{
                background: "#f9f9f9",
                marginTop: "20px",
                overflow: "hidden",
            }}>
                <Row>
                    <Col data-aos="fade-up" >
                
                        <p style={{
                            color: "black",
                            fontSize: "18px",
                            textAlign: "center",
                        }}>
                            BIM Solutions is a consulting firm working to provide collaborative solutions in the Architecture, Engineering and Construction (AEC) industry.
                            We deliver comprehensive solutions for  Virtual Design, Construction and Project Management services leveraging Building Information Modelling (BIM)
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col style={{
                        marginTop: "20px",
                        overflow: "hidden",
                    }}>
                        <Row>
                            <Col md={6} xs={12} data-aos="fade-right" data-aos-delay="10">
                                <img className="our-vision-mission-img" src={our_vision_img} alt="" />
                            </Col>

                            <Col md={6} xs={12} data-aos="fade-left" data-aos-delay="500">                                <p style={{
                                    color: "black",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                }}>Our Vision</p>

                                <p style={{
                                    color: "black",
                                    fontSize: "18px",
                                }}>To be a global leader in Building Information Modeling by transforming the way buildings are designed, constructed, and maintained.
                                    We envision a future where every construction project is driven by precision, collaboration, and sustainability — where digital intelligence bridges the gap between concept and reality.
                                    Through continuous innovation, cutting-edge technology, and deep industry expertise, we strive to empower the architecture, engineering, and construction (AEC) community to create smarter, more efficient, and environmentally responsible spaces.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6} xs={12} data-aos="fade-right" data-aos-delay="500"
                             style={{
                                marginTop: "20px"
                            }}>
                                <p style={{
                                    color: "black",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                }}> Our Mission</p>

                                <p style={{
                                    color: "black",
                                    fontSize: "18px",
                                }}>
                                    Our mission is to deliver high-quality, customized BIM services that enable clients to make better design decisions, reduce risks, and optimize performance across all project phases.
                                    We are committed to supporting our clients with accurate 3D modeling, detailed documentation, clash detection, and integrated project delivery.
                                    By fostering transparent communication, adopting the latest BIM technologies, and focusing on client satisfaction, we aim to simplify complex construction processes and contribute to the successful delivery of innovative, cost-effective, and sustainable projects.
                                </p>
                            </Col>

                            <Col data-aos="fade-left" data-aos-delay="10">
                                <img className="our-vision-mission-img" src={our_mission_img} alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default About