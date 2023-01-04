
import axios from 'axios'
import React, { useState } from 'react'
import './AddStudent.css'


function AddStudent() {
   
    const[id,setId]=useState('')
    const[Name,setName]=useState('')
    const[FatherName,setFatherName]=useState('')
    const[Phone,setPhone]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/Student",{id,Name,FatherName,Phone})
        .then(res=>{
            if(id===''  ){
            document.getElementById('post').innerHTML=" Please enter Id "}
            else{
                document.getElementById('post').innerHTML=" "
            }
            
             
        })
        .catch(res=>{
            document.getElementById('post').innerHTML="Record not inserted "
        })
    }
  return (
    
    <center>
    <div className='labels'>
       
        <form onSubmit={submitHandler}>
            <label>Id</label><br/>
            <input type="number" name="id" value={id} onChange={(e)=>setId(e.target.value)} /><br/>
            <label>Name</label><br/>
            <input type="text" name="Name" value={Name} onChange={(e)=>setName(e.target.value)} /><br/>
            <label>Father Name</label><br/>
            <input type="text" name="FatherName"  value={FatherName} onChange={(e)=>setFatherName(e.target.value)}/><br/>
            <label>Phone Number</label><br/>
            <input type="number" name="Phone" value={Phone} onChange={(e)=>setPhone(e.target.value)}/><br/>
            <input style={{backgroundColor: "green",color:'white'}}type="submit"  />
        </form>
       
        <div id='post'></div>
        
        
    </div>
    </center>
  )
}

export default AddStudent