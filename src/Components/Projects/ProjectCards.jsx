import React from 'react'
import { Col } from 'react-bootstrap'
import './Projects.css';

function ProjectCards({title,descriptionES,descriptionEN,imgUrl, language}) {
  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <img src={imgUrl} className='projectImg'/>
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{language ? descriptionES: descriptionEN}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCards