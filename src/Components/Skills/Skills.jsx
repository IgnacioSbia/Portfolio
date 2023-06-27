import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Skills.css';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

function Skills(props) {
   

  return (
    <>
    <main className='skill' id='skills'>
      <Container>
        <Row>
            <Col>
               
                        <div className='skill-bx'>
                            <h2>
                                {props.language ? 'Habilidades' : 'Skills' }
                            </h2>
                            <p>{props.language ? 'Aqui algunas de las habilidades con las que me siento mas comodo trabajando.':'These are a list of the skills I feel more comfortable with'}.</p>
                            <TrackVisibility> 
                                     {({isVisible})=>
                                        <div className={ isVisible ? 'skillsCardContent animate__animated animate__slideInLeft': "skillnotShowing"}>
                                            <Card style={{ width: '18rem' }} className='skillsCard'>
                                                <Card.Body>
                                                    <Card.Title>Front-End</Card.Title>
                                                    <Card.Text className='frontendski'>
                                                        {props.language ? "Las diferentes herramientas que he utilizado para desarollar el frontend en proyectos en los que he trabajado:" :  "These are  some of the tools I use developing the frontend in the projects I've worked on:"}
                                                    </Card.Text>
                                                    <Card.Subtitle className="mb-2 backendSkills">HTML</Card.Subtitle>
                                                    <Card.Subtitle className="mb-2 backendSkills">CSS</Card.Subtitle>
                                                    <Card.Subtitle className="mb-2 backendSkills">React.js</Card.Subtitle>
                                                    <Card.Subtitle className="mb-2 backendSkills">Bootstrap</Card.Subtitle>
                                                </Card.Body>
                                            </Card>
                                    
                                            <Card style={{ width: '18rem' }} className='skillsCard'>
                                                <Card.Body>
                                                    <Card.Title>Back-End</Card.Title>
                                                    <Card.Text className='frontendski'>
                                                    {props.language ? "Las diferentes herramientas que he utilizado para desarollar el backend en proyectos en los que he trabajado:" :  "These are  some of the tools I use use developing the backend in the projects I've worked on:"}
                                                    </Card.Text>
                                                    <Card.Subtitle className="mb-2 backendSkills">Node.Js</Card.Subtitle>
                                                    <Card.Subtitle className="mb-2 backendSkills">Express.js</Card.Subtitle>
                                                    <Card.Subtitle className="mb-2 backendSkills">Knex.js</Card.Subtitle>
                                                
                                                </Card.Body>
                                            </Card>
                                            </div>
                                        }
                                    </TrackVisibility>
                        </div>
                    
               
            </Col>
        </Row>
     </Container>  
    </main>
    
    </>
  )
}

export default Skills