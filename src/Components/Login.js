
import React, { useState } from 'react'
import {  Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import welcome from './Welcome.png'

const Login = () => {
    const[name,setName]=useState('');
    const[password,setPassword]=useState('');
    const Navigate=useNavigate();
    const submitHandler=(e)=>{
      e.preventDefault();
      if(name==="admin" && password==="123456")
      
            {
               Navigate('/Home')
            }
            else
           
                {
                    console.log("Fail");
                }
    }

  return (
   <form onSubmit={submitHandler}>
    <Card className='card' style={{ width: '23rem' }}>
      <Card.Img src= {welcome}/>
      <Card.Body>
        
        <Card.Title>Login :</Card.Title>
        <Card.Text>
         <input type="text" name="name"  placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </Card.Text>
        <Card.Text>
         <input type="password" name="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
         </Card.Text>
        <button type='submit'>submit</button>
      </Card.Body>
      
    </Card>
    </form>
   
  )
}

export default Login