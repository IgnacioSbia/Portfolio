import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState, useEffect} from "react";
import logo from '../../assets/images/logocompleted.png';
import './NavBar.css';
import navicon1 from '../../assets/images/navicon.svg';
import navicon2 from '../../assets/images/github-icon-white-6.jpg';



function NavBar(props) {
   
  const [activLink, setactivLink] = useState('home')
  const [scroll, setScroll] = useState(false);
  const [language, setLanguage] = useState(false)


  const changeLanguage = ()=>{
      if(language){
          setLanguage(false)
          props.setTranslated(language)
      }else{
          setLanguage(true)
          props.setTranslated(language)     
         }
  }
  useEffect(()=>{
      const onScroll = ()=>{
        if(window.scrollY >50){
          setScroll(true);
        }else{
          setScroll(false);
        }
      }
      window.addEventListener("scroll", onScroll);

      return ()=> window.removeEventListener("scroll", onScroll);
  },[])

  const onUpdateActiveLink = (value)=>{
    setactivLink(value)
  }

  return (
    <Navbar bg="light" expand="lg" className={scroll ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt='Logo' className='portfolioLogo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="#home" className={activLink === 'home' ? 'active navbar-Link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>{language ?'Home':'Inicio'}</Nav.Link>
            <Nav.Link href="#skills" className={activLink === 'skills' ? 'active navbar-Link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>{language ?'Skills':'Habilidades'}</Nav.Link>
            <Nav.Link href="#projects" className={activLink === 'projects' ? 'active navbar-Link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>{language ?'Projects':'Proyectos'}</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='#' onClick={changeLanguage}><img src={navicon1} alt=''/></a>
              <a href='#'><img src={navicon2} alt='' className='navBarGithub'/></a>
            </div>
            <button className='goComm' onClick={()=>{console.log('connect')}}><span>{language ?  'Contact Me!' : 'Contactame!' }</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;