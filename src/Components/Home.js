import React from 'react'
import {  Col,  Row} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

import path from './AfterLogin.png'
import './Home.css'
import RightBar from './RightBar'


const Home = () => {
  return (
  
  
      <Row className='Home'>
      <Col style={{backgroundColor: "lightblue"}} md='3'>
       <img height="150px" width="50%" src={'https://www.elearninfotech.com/img/logo-primary.png'} alt='abc'/>
       <ul>
      
       <li>
            <NavLink to='./GetStudents' ><Icon name='group'/>GetStudents</NavLink>
        </li>
        <li>
            <NavLink to='./AddStudent' ><Icon name='add user'/>AddStudents</NavLink>
        </li>
        <li>
            <NavLink to='./DeleteStudent' > <Icon name="trash" />DeleteStudents</NavLink>
        </li>
        <li>
            <NavLink to='./EditStudent' ><Icon name='edit'/>EditStudents</NavLink>
        </li>
       </ul>
      
      </Col>
      <Col md='9'style={{backgroundColor: "lightyellow"}}>
        <div className="img">
            <img  height="150px"   width="100%" src={path} alt='def'/>
        </div>
        <Row>
          <Col md='12'>
            <RightBar/>
          </Col>
          
        </Row>
      </Col>
    
    </Row>

      

 
  )
}

export default Home