import { Accordion, Button, Card, Carousel, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../css/home.css';

import Aos from "aos";
import "aos/dist/aos.css";

import home_carasol_img1 from '../assets/carasol-home1.jpg';
import home_carasol_img2 from '../assets/carasol-home2.jpg';
import home_carasol_img3 from '../assets/carasol-home3.jpg';

import home_feedback_img1 from '../assets/feedback_1.jpeg';
import home_feedback_img2 from '../assets/feedback_3.jpeg';

import home_stack_img1 from '../assets/about-post-1.jpg';
import home_stack_img2 from '../assets/about-post-2.jpg';

import home_service_section_img1 from '../assets/services-2-post-1.jpg';
import home_service_section_img2 from '../assets/services-2-post-2.jpg';
import home_service_section_img3 from '../assets/services-2-post-3.jpg';

import home_show_img1 from '../assets/portfolio-post-9.jpg';
import home_show_img2 from '../assets/portfolio-post-10.jpg';
import home_show_img3 from '../assets/portfolio-post-11.jpg';
import home_show_img4 from '../assets/portfolio-post-12.jpg';
import home_show_img5 from '../assets/portfolio-post-13.jpg';

import home_core_value from "../assets/core values.jpeg"

import home_bottom_app_logo from "../assets/app-logo2.png"
import { useEffect } from "react";


function Home() {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }
    );

    return (
        <>
            <Container fluid>
                <Row>
                    <Col data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"

                        style={{
                            overflow: 'hidden',
                        }}>

                        <Carousel fade>

                            <Carousel.Item>
                                <img className="home-carousel-img" src={home_carasol_img1} alt='' />

                                <Carousel.Caption className="home-carousel-caption-section">

                                    <p className="home-carousel-head">BIM Services</p>
                                    <p className="home-carousel-head">Design For Projects</p>

                                    <p className="home-carousel-sub-head">Interior Solution -Easy To define Design -Safe & Secure Process</p>

                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="home-carousel-img" src={home_carasol_img2} alt='' />

                                <Carousel.Caption className="home-carousel-caption-section">

                                    <p className="home-carousel-head">Architecture &</p>
                                    <p className="home-carousel-head">Interior Solution</p>

                                    <p className="home-carousel-sub-head">Interior Solution -Easy To define Design -Safe & Secure Process</p>

                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="home-carousel-img" src={home_carasol_img3} alt='' />

                                <Carousel.Caption className="home-carousel-caption-section">

                                    <p className="home-carousel-head">Structural &</p>
                                    <p className="home-carousel-head">Steel Detailing</p>

                                    <p className="home-carousel-sub-head">Interior Solution -Easy To define Design -Safe & Secure Process</p>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>

            <Container fluid >
                <Row>
                    <Col style={{ backgroundColor: '#282828', padding: '20px', marginTop: "20px", overflow: 'hidden' }}
                        data-aos="zoom-in-up">

                        <Carousel>
                            <Carousel.Item>
                                <Row>
                                    <Col md={4} xs={12}>
                                        <img src={home_feedback_img1} alt="Feedback" className="home-feedback-img" />
                                    </Col>

                                    <Col md={8} xs={12}>
                                        <p className="home-feedback-txt">I was genuinely impressed by how beautifully the space has been designed.
                                            It perfectly blends style with comfort, making it feel both luxurious and livable. Every element, from the furniture to the color palette. </p>
                                    </Col>
                                </Row>

                            </Carousel.Item>

                            <Carousel.Item>
                                <Row>
                                    <Col md={4}>
                                        <img src={home_feedback_img2} alt="Feedback" className="home-feedback-img" />
                                    </Col>

                                    <Col>
                                        <p className="home-feedback-txt">I was genuinely impressed by how beautifully the space has been designed.
                                            It perfectly blends style with comfort, making it feel both luxurious and livable. Every element, from the furniture to the color palette. </p>
                                    </Col>
                                </Row>

                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col style={{
                        overflow: 'hidden',
                    }}>
                        <Row>
                            <Col md={3} data-aos="fade-right" data-aos-delay="800">
                                <img src={home_stack_img1} alt="Stack 1" className="home-stack-img1" />
                            </Col>

                            <Col md={3} data-aos="fade-right" data-aos-delay="300">
                                <img src={home_stack_img2} alt="Stack 2" className="home-stack-img2" />
                            </Col>

                            <Col className="home-stack-col" data-aos="fade-left" data-aos-delay="300">
                                <p style={{
                                    fontSize: '30px',
                                    fontWeight: '600',

                                }}>About us</p>

                                <p className="home-stack-head">Bim Services With Difference</p>

                                <p style={{
                                    fontWeight: 'bold',
                                }}>Our BIM experts apply knowledge from diverse fields,
                                    just like architects study multiple concentrations in their training.</p>

                                <p>BIM transforms design concepts into data-rich models.
                                    These models reflect construction intent, user needs, and how structures relate to physical or social surroundings.</p>

                                <Button variant="secondary" style={{
                                    padding: '15px 30px',
                                    marginTop: '20px',
                                    backgroundColor: '#82b53f',
                                }}>Learn More</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col style={{
                        marginTop: '20px',
                        overflow: 'hidden',
                    }}>
                        <Row>
                            <Col md={4} xs={12} data-aos="fade-up-right">
                                <div>
                                    <img src={home_carasol_img1} alt="" className="home-carouselimg-stack-img" />
                                    <h1 className="home-carousel-stack-txt">01</h1>

                                    <div style={{
                                        position: 'relative',
                                        top: '-70px',
                                        left: '70px',
                                        background: "white",
                                        width: '60%',
                                        height: '80px',
                                        padding: '8px',
                                        border: `1px solid black`,
                                        borderRadius: '5px',
                                    }}>
                                        <h3 style={{
                                            textAlign: 'center',
                                            fontSize: "20px",
                                            fontWeight: '500',
                                        }}>Multi <br /> Bim Services</h3>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} xs={12} data-aos="fade-up">
                                <div>
                                    <img src={home_carasol_img2} alt="" className="home-carouselimg-stack-img" />
                                    <h1 className="home-carousel-stack-txt">02</h1>

                                    <div style={{
                                        position: 'relative',
                                        top: '-70px',
                                        left: '70px',
                                        background: "white",
                                        width: '60%',
                                        padding: '10px',
                                        border: `1px solid black`,
                                        borderRadius: '5px',
                                    }}>
                                        <h3 style={{
                                            textAlign: 'center',
                                            fontSize: "20px",
                                            fontWeight: '500',
                                        }}>Structural BIM Services</h3>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} xs={12} data-aos="fade-up-left">
                                <div>
                                    <img src={home_carasol_img3} alt="" className="home-carouselimg-stack-img" />
                                    <h1 className="home-carousel-stack-txt">03</h1>

                                    <div style={{
                                        position: 'relative',
                                        top: '-70px',
                                        left: '70px',
                                        background: "white",
                                        width: '60%',
                                        padding: '11px',
                                        border: `1px solid black`,
                                        borderRadius: '5px',
                                    }}>
                                        <h3 style={{
                                            textAlign: 'center',
                                            fontSize: "20px",
                                            fontWeight: '500',
                                        }}>Interior & Architectural Design</h3>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Col>

                </Row>
            </Container>

            <Container>
                <Row>
                    <Col style={{
                        overflow: 'hidden',
                    }}>

                        <Row>
                            <Col>
                                <p style={{
                                    textAlign: 'center',
                                    fontSize: '26px',
                                    fontWeight: '500',
                                }}>Services</p>

                                <p style={{
                                    textAlign: 'center',
                                    fontSize: '40px',
                                    fontWeight: '600',
                                }}>What We Do</p>
                            </Col>
                        </Row>

                        <Row>

                            <Col xs={12} md={4} data-aos="fade-up-right">
                                <Card style={{
                                    border: "none",
                                }}>
                                    <Card.Img src={home_service_section_img1} />
                                    <Card.Body>

                                        <Card.Title style={{
                                            textAlign: 'center',
                                            fontWeight: '600',
                                        }}> Design & Planning
                                        </Card.Title>

                                        <Card.Text style={{
                                            textAlign: 'center',
                                        }}>
                                            BIM architecture involves the design and coordination of building data and elements to define structure and functionality.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={12} md={4} data-aos="fade-up">
                                <Card style={{
                                    border: "none",
                                }}>
                                    <Card.Img src={home_service_section_img2} />
                                    <Card.Body>

                                        <Card.Title style={{
                                            textAlign: 'center',
                                            fontWeight: '600',
                                        }}>Custom Solutions
                                        </Card.Title>

                                        <Card.Text style={{
                                            textAlign: 'center',
                                        }}>
                                            BIM solutions are tailored to project needs, focusing on detailed planning and smart data structure for efficient execution.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={12} md={4} data-aos="fade-up-left">
                                <Card style={{
                                    border: "none",
                                }}>
                                    <Card.Img src={home_service_section_img3} />
                                    <Card.Body>

                                        <Card.Title style={{
                                            textAlign: 'center',
                                            fontWeight: '600',
                                        }}> Furniture & Decor
                                        </Card.Title>

                                        <Card.Text style={{
                                            textAlign: 'center',
                                        }}>
                                            BIM integrates interior elements like furniture layouts and decor, ensuring space is both functional and visually aligned.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Col md={12} xs={10} className="home-faq-bkg-img"
                        data-aos="fade-up"
                        style={{
                            overflow: 'hidden',
                        }}>

                        <p style={{
                            color: "white",
                            fontSize: "30px",
                            fontWeight: "700"
                        }}>FAQ's:-</p>

                        <p style={{
                            color: "white",
                            fontSize: "35px"
                        }}>Get Answers</p>

                        <Accordion flush defaultActiveKey="0" >
                            <Accordion.Item eventKey="0" className='home-faq'>
                                <Accordion.Header>1. What is BIM and why is it important in construction? </Accordion.Header>
                                <Accordion.Body>
                                    BIM (Building Information Modeling) is a digital process that creates a 3D model of a building with detailed data about its components.
                                    It helps improve collaboration, reduce errors, and streamline construction workflows.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1" className='home-faq'>
                                <Accordion.Header>2. What services are included in BIM?</Accordion.Header>
                                <Accordion.Body>
                                    Our BIM services include 3D modeling, clash detection, construction documentation, quantity take-offs, MEP coordination, and as-built modeling
                                    — all tailored to meet your project needs.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2" className='home-faq'>
                                <Accordion.Header>3. Who can benefit from BIM services?</Accordion.Header>
                                <Accordion.Body>
                                    Architects, engineers, contractors, developers, and facility managers all benefit from BIM.
                                    It enhances accuracy, saves time, and improves decision-making throughout the building lifecycle.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3" className='home-faq'>
                                <Accordion.Header>4. Can BIM be used for existing buildings?</Accordion.Header>
                                <Accordion.Body>
                                    Yes. With scan-to-BIM technology, we can create accurate 3D models of existing structures for renovation, maintenance, or documentation purposes.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4" className='home-faq'>
                                <Accordion.Header>5. How does BIM improve collaboration among project teams?</Accordion.Header>
                                <Accordion.Body>
                                    BIM allows real-time collaboration by sharing a centralized model. Architects, engineers, and contractors can work together efficiently, reducing rework and improving project outcomes.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="6" className='home-faq'>
                                <Accordion.Header>6. What software do you use for BIM services?</Accordion.Header>
                                <Accordion.Body>
                                    We use industry-leading BIM tools like Autodesk Revit, Navisworks, AutoCAD, and other specialized platforms to deliver precise and reliable modeling and coordination services.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col style={{
                        marginTop: '20px',
                        overflow: 'hidden',
                    }}>

                        <Row>
                            <Col md={4}>

                                <Row>
                                    <Col md={12}
                                        data-aos="fade-right"
                                        style={{
                                            marginTop: '5px',
                                        }}>
                                        <img src={home_show_img1} alt="" className="home-show-img" />
                                    </Col>

                                    <Col
                                        data-aos="fade-right"
                                        data-aos-delay="50"
                                        style={{
                                            marginTop: '5px',
                                        }}>
                                        <img src={home_show_img2} alt="" className="home-show-img" />
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={4} xs={12}
                                data-aos="fade-up"  >
                                <img src={home_show_img3} alt="" style={{
                                    width: "100%",
                                    height: "700px",
                                    marginTop: '10px',
                                }} />
                            </Col>

                            <Col md={4}>
                                <Row>
                                    <Col md={12}
                                        data-aos="fade-left"
                                        style={{
                                            marginTop: '5px',
                                        }}>
                                        <img src={home_show_img4} alt="" className="home-show-img" />
                                    </Col>

                                    <Col
                                        data-aos="fade-left"
                                        data-aos-delay="50"
                                        style={{
                                            marginTop: '5px',
                                        }}>
                                        <img src={home_show_img5} alt="" className="home-show-img" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col
                        data-aos="fade-up"
                        className="home-get-quote-col"
                        style={{
                            overflow: 'hidden',
                        }}>

                        <Row>
                            <Col md={7}>
                                <p style={{
                                    color: "white",
                                    fontSize: "16px"
                                }}> GET A QUOTE</p>

                                <p style={{
                                    color: "white",
                                    fontSize: "50px",
                                    fontWeight: "600"
                                }}>GET Incredible Interior Design</p>

                                <p style={{
                                    color: "white",
                                    fontSize: "50px",
                                    fontWeight: "600"
                                }}>Right NOW!</p>
                            </Col>

                            <Col data-aos="zoom-out-up"
                                data-aos-delay="20"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                <Link to="/service">
                                    <Button style={{
                                        background: "black",
                                        color: "white",
                                        padding: "24px 32px"
                                    }} variant="secondary">Our Services</Button>
                                </Link>

                                <Link to="/contact">
                                    <Button style={{
                                        background: "white",
                                        color: "black",
                                        padding: "20px 20px",
                                        marginTop: "10px"
                                    }} variant="secondary">Get Appointment</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col style={{
                        overflow: 'hidden',
                    }}>

                        <Row>
                            <Col md={6} xs={12} data-aos="fade-up">
                                <img src={home_core_value} alt="" className="home-core-value-img" />
                            </Col>

                            <Col data-aos="fade-left"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    marginTop: "20px"
                                }}>
                                <p style={{
                                    fontSize: "20px",
                                    fontWeight: "600"
                                }}>
                                    Skillset
                                </p>

                                <p style={{
                                    fontSize: "50px",
                                    fontWeight: "600"
                                }}>
                                    The Core Company Values
                                </p>

                                <p>
                                    BIM is the digital realization of a building concept or idea.
                                    It can represent construction logic, how people will interact with a space, or how the structure integrates into its physical or social environment.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col
                        data-aos="fade-up"
                        style={{
                            backgroundColor: "#f5f5f5",
                            marginTop: "30px",
                            padding: "20px",
                            overscroll: 'hidden',
                        }}>
                        <Row>
                            <Col md={4} xs={12} style={{
                                marginBottom: "20px"
                            }}>
                                <img src={home_bottom_app_logo} alt="" className="home_bottom_app_logo" />

                                <p>We specialize in Building Information Modeling (BIM) solutions that bring architectural ideas to life with accuracy, efficiency, and innovation.
                                    From concept to construction, we help shape the future of building.</p>
                            </Col>

                            <Col md={4} xs={12} style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                            }}>
                                <p style={{
                                    fontSize: "30px"
                                }}> Quick Links :-</p>

                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <p className='home-navigate-page'>Home</p>
                                </Link>

                                <Link to="/about" style={{ textDecoration: "none" }}>
                                    <p className='home-navigate-page'>About</p>
                                </Link>

                                <Link to="/service" style={{ textDecoration: "none" }}>
                                    <p className='home-navigate-page'>Service</p>
                                </Link>

                                <Link to="/contact" style={{ textDecoration: "none" }}>
                                    <p className='home-navigate-page'>Contact</p>
                                </Link>
                            </Col>

                            <Col md={4} xs={12}>
                                <Table style={{
                                    marginTop: "20px"
                                }}>
                                    <tbody>

                                        <tr>
                                            <td>
                                                <p>
                                                    Phone Number:-
                                                    <br />
                                                    +91 87889 41737
                                                </p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <p >
                                                    Email Address:-
                                                    <br />
                                                    bimsolution@gmail.com
                                                </p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <p >
                                                    Office Address:-
                                                    <br />
                                                    1745/B/936, Kundanlal Gupta Nagar, Kalamna Ring Road, Nagpur, 440017
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Home;