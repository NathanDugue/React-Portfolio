import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



export const Home = () => {
    return (
        <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}>

            <Container className="banner" id="home">
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>


                        <span className="tagline">Hello! This is my Portfolio!</span>
                        <h1>{` My name is Nathan`} </h1>
                        <p> I have a great of showing my Front End Developer Skills. My career path and my portfolio will demonstrate it well.</p>
                        <Link to="/skills">
                            <button>Get to know me! <IoArrowForward size={25} /></button>
                        </Link>


                    </Col>
                    <Col xs={12} md={6} xl={5}>


                        <img src={avatar} alt="Header Img" />


                    </Col>
                </Row>
            </Container>

        </motion.div>
    )
}