import React from 'react'
import { Col } from 'react-bootstrap'
import './Projects.css';
import { Link } from 'react-router-dom';

function ProjectCards({title,descriptionES,descriptionEN,imgUrl,siteUrl,language}) {
  return (
    <Col sm={6} md={4}>
        <Link to={siteUrl} className='projectCardsLinks' target='blank'>
          <div className='proj-imgbx'>
              <img src={imgUrl} className='projectImg'/>
              <div className='proj-txtx'>
                  <h4>{title}</h4>
                  <span>{language ? descriptionES: descriptionEN}</span>
              </div>
          </div>
        </Link>
    </Col>
  )
}

export default ProjectCards