import {useState, useEffect} from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import synthSun from '../../assets/images/SynthwaveSun.png';
import './HomeBanner.css';
import { HashLink } from 'react-router-hash-link';


function HomeBanner(props) {
 const [loopNumber, setLoopNumber] = useState(0);   
 const [deleteting, setDeleting] = useState(false);
 const toRotate = ["...", "..."];
 const [delta, setDelta] = useState(300 - Math.random() * 100);
 const [actualtext, setActualText] = useState('');
 const period = 2000;

 useEffect(()=>{
    const ticker = setInterval(()=>{
        tick();
    }, delta)

    return () =>{ clearInterval(ticker)};
     },[actualtext])

 const tick = () =>{
    const i = loopNumber % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = deleteting ? fullText.substring(0, actualtext.length - 1): fullText.substring(0, actualtext.length +1);

    setActualText(updatedText);
    
    if(deleteting){
        setDelta(prevDelta => prevDelta /2)
    }

    if( !deleteting && updatedText === fullText){
        setDeleting(true);
        setDelta(period);
    }else if(deleteting && updatedText === ''){
        setDeleting(false);
        setLoopNumber(loopNumber +1);
        setDelta(500);
    }
    
 }

  return (
    <>
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>{props.language ? 'Bienvenido a mi Portfolio' : 'Welcome to my Portfolio'}</span>
                    <h1>{props.language ? 'Hola, soy Ignacio ' : "Hi I'm Ignacio  a"}<hr/><span className='wrap'>Full Stack Web Developer{actualtext}</span></h1>
                    <p className='homeBannerDescription'>{props.language ? 'En expectativas de seguir mejorando mis habilidades en un entorno laboral real. Motivado para trabajar y enfrentar los desafios en los productos que este desarollando, utilizando mis conocimientos para ello.' 
                    : 
                    'In the expectation of continuing to improve my skills in a real work environment. Motivated to work and face the challenges in the products that I am developing, using my knowledge for it.'}</p>
                    <HashLink to='#connect'>
                     <button onClick={()=>console.log('connect')}>{props.language ? "Conectemos ":"Let's connect "}<FontAwesomeIcon icon={faCircleArrowRight}/></button>
                    </HashLink>
                </Col>
                <Col xs={12} md={6} xl={5}>
                   <img src={synthSun} alt='header img'/> 
                </Col>
            </Row>
        </Container>
    </section>
   
    </>
  )
}

export default HomeBanner;