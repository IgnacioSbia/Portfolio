import {useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import conactImg from '../../assets/images/lofiboy.gif';
import './Contact.css';
import TrackVisibility from 'react-on-screen';
import 'animate.css';


function Contact(props) {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value)=>{
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:8000/sendmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
            
        });
        setButtonText("Send")
        let result = response.json();
        setFormDetails(formInitialDetails);


    }

  return (
    <section className='contact' id='connect'>
        <Container className='containerContact'>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={conactImg} alt='contact Me' className='contactImg'/>
                </Col>
                <Col md={6}>
                    <div className='contactForm'>
                        <h2>{props.language ? "Contacta" : 'Get In Touch'}</h2>
                        <form onSubmit={handleSubmit} className='contactFormContent'>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text'value={formDetails.firstName} placeholder='Name' onChange={(e)=> onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                <input type='email'value={formDetails.email} placeholder='email' onChange={(e)=> onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder='Message' onChange={(e)=> onFormUpdate('message', e.target.value)}/>
                                    <button type='submit' className='contactSendMail'><span>{buttonText}</span></button>
                                </Col>
                                
                            </Row>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact