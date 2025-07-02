import { useState, useEffect } from "react";
import { Card, Col, Container, Row, ToggleButton } from "react-bootstrap"

import "../css/service.css"

import Aos from "aos";
import "aos/dist/aos.css";

import img1 from "../assets/vdc & bim.jpg";
import img2 from "../assets/shop drawing services.jpg";
import img3 from "../assets/bim modeling.png";
import img4 from "../assets/bim content creation.jpg";
import img5 from "../assets/onsite bim services.jpg";
import img6 from "../assets/vr & ar.png";

import img7 from "../assets/arc & design.avif";
import img8 from "../assets/lod & bim modeling.avif";

import img9 from "../assets/struct engg.jpg";
import img10 from "../assets/str steel deal.png";

import img11 from "../assets/mepf.avif";
import img12 from "../assets/mech model & drawing.png";

import img13 from "../assets/as built bim.avif";
import img14 from "../assets/scan to bim.webp";
import img15 from "../assets/digital twins.avif";
import img16 from "../assets/bim facility mgmt.avif";

import img17 from "../assets/4d scheduling.png";
import img18 from "../assets/pre bid & bid.svg";
import img19 from "../assets/constructn scheduling.jpg";


export const Service = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }
    );

    const portfolio = [

        // BIM Services
        {
            id: 1,
            name: "VDC & BIM Coordination",
            category: "BIM Services",
            img: img1,
        },
        {
            id: 2,
            name: "Shop Drawing Services",
            category: "BIM Services",
            img: img2,
        },
        {
            id: 3,
            name: "BIM Modeling Services",
            category: "BIM Services",
            img: img3,
        },
        {
            id: 4,
            name: "BIM Content Creation",
            category: "BIM Services",
            img: img4,
        },
        {
            id: 5,
            name: "Onsite BIM Services",
            category: "BIM Services",
            img: img5,
        },
        {
            id: 6,
            name: "VR and AR",
            category: "BIM Services",
            img: img6,
        },

        // Architectural BIM Services
        {
            id: 7,
            name: "Architecture & Design",
            category: "Architectural BIM Services",
            img: img7,
        },
        {
            id: 8,
            name: "LOD 400 BIM Modelling",
            category: "Architectural BIM Services",
            img: img8,
        },

        // Structural BIM Services
        {
            id: 9,
            name: "Structural Engineering",
            category: "Structural BIM Services",
            img: img9,
        },
        {
            id: 10,
            name: "Structural Steel Detailing",
            category: "Structural BIM Services",
            img: img10,
        },

        // MEP BIM Services
        {
            id: 11,
            name: "MEPF Engineering",
            category: "MEP BIM Services",
            img: img11,
        },
        {
            id: 12,
            name: "Mechanical Modeling and Drawings",
            category: "MEP BIM Services",
            img: img12,
        },

        // As-Built BIM Services
        {
            id: 13,
            name: "As-Built BIM",
            category: "As-Built BIM Services",
            img: img13,
        },
        {
            id: 14,
            name: "Scan to BIM",
            category: "As-Built BIM Services",
            img: img14,
        },
        {
            id: 15,
            name: "Digital Twins",
            category: "As-Built BIM Services",
            img: img15,
        },
        {
            id: 16,
            name: "Facility Management",
            category: "As-Built BIM Services",
            img: img16,
        },

        // BIM Project Management
        {
            id: 17,
            name: "4D Scheduling",
            category: "BIM Project Management",
            img: img17,
        },
        {
            id: 18,
            name: "Pre-Bid and Bid support",
            category: "BIM Project Management",
            img: img18,
        },
        {
            id: 19,
            name: "Construction Scheduling",
            category: "BIM Project Management",
            img: img19,
        },

    ]

    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'BIM Services', value: '1' },
        { name: 'Architectural BIM Services', value: '2' },
        { name: 'Structural BIM Services', value: '4' },
        { name: 'MEP BIM Services', value: '5' },
        { name: 'As-Built BIM Services', value: '6' },
        { name: 'BIM Project Management', value: '7' },
    ];

    const [selectedCategory, setSelectedCategory] = useState("BIM Services")

    const filterCategory = portfolio.filter((e) => selectedCategory === e.category)

    return (
        <>
            <Container>
                <Row>
                    <Col md={12} xs={10}>
                        <Row>
                            {radios.map((radio, idx) => (
                                <Col md={2} xs={6} className="btn-grid">
                                    {/* <ButtonGroup id="btn-grid"> */}
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        name="radio"
                                        value={radio.value}
                                        variant="dark"
                                        checked={radioValue === radio.value}
                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        onClick={() => setSelectedCategory(radio.name)}

                                        className="toggle-btn-grp"
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                    {/* </ButtonGroup> */}
                                </Col>

                            ))}

                        </Row>

                    </Col>
                </Row>

                <Row>

                    {filterCategory.map((e) => (

                        <Col key={e.id} md={4} xs={12} data-aos="zoom-in-up" style={{
                            overflow: 'hidden',
                        }} >
                            <Card className="card-main-div">
                                <Card.Img style={{
                                    borderRadius: "6px",
                                    height: "280px"
                                }} src={e.img} />

                                <h2 className="service-pg-img-title">{e.name}</h2>
                            </Card>

                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}