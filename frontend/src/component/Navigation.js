
import { Container, Nav, Navbar, } from "react-bootstrap";

import app_logo from "../assets/app-logo2.png"


function Navigation() {

    return (
        <>
            <Navbar expand="lg"
                style={{
                    backgroundColor: "black",
                    marginBottom: "10px",
                }}>

                <Container>

                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={app_logo}
                            width="50"
                            height="50"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{
                        borderColor: "white",
                        filter: "invert(100%)",
                    }} />

                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "18px",
                            fontWeight: "500",
                            color: "white",
                        }}>

                            <Nav.Link href="/" style={{
                                color: "white",
                            }}>Home</Nav.Link>
                            <Nav.Link href="/about" style={{
                                color: "white",
                            }}>About</Nav.Link>
                            <Nav.Link href="/service" style={{
                                color: "white",
                            }}>Service</Nav.Link>
                            <Nav.Link href="/contact" style={{
                                color: "white",
                            }}>Contact</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}
export default Navigation;









// function Navi() {
//     return (
//         <>
//             {/* <div className="top-banner">
//                 <Button>Buy now</Button>
//             </div> */}

//             <Container fluid className="Cont1">
//                 <Row>
//                     <Col>
//                         <Navbar.Brand href="#home">
//                             <img
//                                 alt=""
//                                 src={app_logo}
//                                 className="d-inline-block align-top"
//                                 style={{
//                                     width: "18%",
//                                     margin: "-60px 0px 5px 50px"
//                                 }}
//                             />
//                         </Navbar.Brand>
//                     </Col>

//                     <Col>

//                         <Navbar expand="lg">
//                             <Container fluid>
//                                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                                 {/* <Navbar.Collapse id="basic-navbar-nav"> */}
//                                 <Nav className="me-auto navi">
//                                     <Nav.Link href='/' title="Home" className="Drop">Home</Nav.Link>

//                                     <Nav.Link href="/about">About</Nav.Link>

//                                     <Nav.Link href='/service' title="Service" className="Drop">Service</Nav.Link>

//                                     {/* <Nav.Link href='/pages' title="Pages" className="Drop">Pages</Nav.Link>

//                                     <Nav.Link href='/news' title="News" className="Drop">News</Nav.Link> */}

//                                     <Nav.Link href="/contact">Contact</Nav.Link>
//                                 </Nav>

//                             </Container>
//                         </Navbar>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     );
// }

// export default Navi;

// {/* <Form className="Form">
//     <InputGroup>
//         <InputGroup.Text id="icon">
//             <i className="fa-solid fa-magnifying-glass fa-xl" style={{ color: '#272727' }}></i>
//         </InputGroup.Text>
//         <InputGroup.Text id="icon1">
//             <i className="fa-solid fa-list fa-xl" style={{ color: '#272727' }}></i>
//         </InputGroup.Text>
//     </InputGroup>
// </Form> */}
// {/* </Navbar.Collapse> */ }