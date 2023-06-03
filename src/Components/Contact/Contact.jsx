import {useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import conactImg from '../../assets/images/contactimg.png';

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

    const handleSubmit = ()=>{

    }

  return (
    <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={conactImg} alt='contact Me'/>
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type='text'value={formDetails.firstName} placeholder='First Name' onChange={()=> onFormUpdate('firstName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type='text'value={formDetails.lastName} placeholder='Last Name' onChange={()=> onFormUpdate('lastName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type='email'value={formDetails.email} placeholder='email' onChange={()=> onFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col>
                                <textarea row="6" value={formDetails.message} placeholder='Message' onChange={()=> onFormUpdate('message', e.target.value)}/>
                                <button type='submit'><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact