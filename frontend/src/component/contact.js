import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useState, useEffect } from "react";

import "../css/contact.css";

import Aos from "aos";
import "aos/dist/aos.css";

import axios from "axios";


function Contact() {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }
  );

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/contactDetail", formdata)
      alert("Thank You for submiting your response, you'll get an email shortly.")
    } catch (err) {
      alert("Something went wrong to send formdata.")
    } finally {
      setLoading(false);
    }
  }

  const [loading, setLoading] = useState(false);

  return (
    <>
      <Container fluid className="top-banner-contact" style={{
        overflow: "hidden",
      }}>
        <Row>
          <Col md={12} data-aos="fade-up" className="banner-content-contact"
            style={{
              overflow: "hidden",
            }}>
            <p>HOME | CONTACT US</p>
            <p id="p2">Get In Touch</p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="p-0" style={{ overflow: "hidden" }}>
        <Row>
          <Col data-aos="zoom-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3720.525584911222!2d79.12733135968972!3d21.171270232789517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1751031665168!5m2!1sen!2sin"
              width="88%"
              height="650"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"


            ></iframe>
          </Col>
        </Row>
      </Container>

      <Container style={{
        overflow: "hidden",
      }}>

        <Row>
          <Col md={3} xs={12} id="contact-pg-head">
            CONTACT
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4} id="contactUs-pg">
            <p style={{ color: "black", fontSize: "40px", marginTop: "30px" }}>Contact Us</p>
          </Col>
        </Row>
      </Container>

      <Container className="contact-section" data-aos="zoom-in-up" style={{
        overflow: "hidden",
      }}>
        <Row>
          <Col xs={12} md={3} className="contact-box" id="branch1">
            <h4 id="boxbranch1">01 Contact</h4>
            <p style={{
              color: "black",
              fontSize: "20px"
            }}>+91 8788941737</p>
            {/* <p>16/A, Alvon Miranda Halim Tower, NYC, USA</p>
            <p><i className="fa-solid fa-phone"></i> 908 098 096 76</p>
            <p><i className="fa-solid fa-envelope"></i> info@webexample.com</p> */}
          </Col>

          <Col xs={12} md={3} className="contact-box" id="branch2">
            <h4 id="boxbranch1">02 <br /> Email</h4>
            <p style={{
              color: "black",
              fontSize: "20px"
            }}> bimsolution@gmail.com</p>
            {/* <p>16/A, Alvon Miranda Halim Tower, NYC, USA</p>
            <p><i className="fa-solid fa-phone"></i> 908 098 096 76</p>
            <p><i className="fa-solid fa-envelope"></i> info@webexample.com</p> */}
          </Col>

          <Col xs={12} md={3} className="contact-box" id="branch3">
            <h4 id="boxbranch1">03 Address</h4>
            <p style={{
              color: "black",
              fontSize: "18px"
            }}>1745/B/936, Kundanlal Gupta Nagar, Kalamna Ring Road, Nagpur, 440017</p>
            {/* <p>16/A, Alvon Miranda Halim Tower, NYC, USA</p>
            <p><i className="fa-solid fa-phone"></i> 908 098 096 76</p>
            <p><i className="fa-solid fa-envelope"></i> info@webexample.com</p> */}
          </Col>
        </Row>
      </Container>

      <Container fluid className="form-background" data-aos="zoom-in-up" style={{
        overflow: "hidden",
      }}>
        <Row>
          <Col xs={12} className="text-center mt-5">
            <h5 className="form-heading" >CONTACT</h5>
            <h1 className="form-title">Still Need Query?</h1>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={10} md={8}>

            <Form onSubmit={handleSubmit}>
              <Row className="g-3">
                <Col md={4} xs={12}>
                  <Form.Control required type="text" placeholder="Full Name" name="name" onChange={handleChange} />
                </Col>
                <Col md={4} xs={12}>
                  <Form.Control required type="email" placeholder="Email" name="email" onChange={handleChange} />
                </Col>
                <Col md={4} xs={12}>
                  <Form.Control
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    type="tel" placeholder="Phone Number" name="phone" onChange={handleChange} />
                </Col>
              </Row>

              <Form.Group className="mt-4">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Type your comments..."
                  name="message"
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="text-center mt-4">
                <Button type="submit" id="button1" disabled={loading}>
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default Contact;