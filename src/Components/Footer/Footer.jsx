import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import navicon1 from '../../assets/images/navicon.svg';
import navicon2 from '../../assets/images/github-icon-white-6.jpg';
import logo from '../../assets/images/logocompleted.png';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-items-center'>
                <Col sm={6}>
                    <img src={logo} alt='logo'/>
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/ignacio-sabia-dev/' target='blank'><img src={navicon1}/></a>
                        <a href='https://github.com/IgnacioSbia' target='blank'><img src={navicon2}/></a>
                    </div>
                    <p>Made by Ignacio Sabia.</p>
                </Col>
            </Row>
        </Container>

    </footer>
  )
}

export default Footer