import React, { useState } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import ProjectCards from './ProjectCards'
import './Projects.css';
import pokeImg from '../../assets/images/PokemonProject.png';
import audnImg from '../../assets/images/AudnProject.jpg';
import w40kImg from '../../assets/images/Warhammerprojectprob.jpg';
import eCommrc from '../../assets/images/ecommrce.jpeg';
import 'animate.css';


function Projects(props) {

   

    const myProjects = [
        
        {
            title: "Pokedex",
            descriptionEN: "Pokemon's wiki",
            descriptionES: "Wiki de Pokemon",
            imgUrl: pokeImg
        },
        {
            title: "Audn",
            descriptionEN: "Music player",
            descriptionES: "Reproductor de Musica",
            imgUrl: audnImg
        },
        {
            title: "Warhammer40kWiki",
            descriptionEN: "A short Warhammer 40k Wiki I'm still developing with a friend",
            descriptionES: "Una pequeña wiki de Warhammer 40mil, la cual sigo desarollando con un amigo",
            imgUrl: w40kImg,
            siteUrl: "https://w40kwikiproject.netlify.app/"
        },
        {
            title: "E-commerce",
            descriptionEN: "Small E-Commerce page that I'm developing on a daily basis.",
            descriptionES: "Una pequeña pagina E-Commerce que estoy desarollando diariamente.",
            imgUrl: eCommrc
        }
    ]

  return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col size={12}>
                            <div className='projectsTitle'>
                                <h2>{props.language ? 'Proyectos' : 'Projects'}</h2>
                                <p>{props.language ? "Aqui algunos de los proyectos que he realizado. Todos ellos con colaboración de otros desarolladores utilizando Git.": "Here are some projects I've made. They are all in collaboration with others developers using Git."}</p>
                            </div>
                            <Tab.Container id='projects-tab' defaultActiveKey="first">

                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            myProjects.map((project, index)=>{
                                                return (
                                                    <ProjectCards 
                                                    key={index}
                                                    {...project}
                                                    language = {props.language}/>
                                                
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                            </Tab.Container>
                    </Col>
                </Row>
            </Container>
           

        </section>
  )
}

export default Projects;