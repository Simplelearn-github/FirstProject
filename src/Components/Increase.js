import axios from 'axios'
import React, { useState } from 'react'

const Increase = () => {
    const[Id,setId]=useState('')
    const[Name,setName]=useState('')
    const[FatherName,setFatherName]=useState('')
    const[Phone,setPhone]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/Student',{Id,Name,FatherName,Phone})
        .then(res=>{
            console.log("succes")
             
        })
        .catch(res=>{
            console.log("not succes")
        })
    }
  return (
    <div>
    <form onSubmit={submitHandler}>
        <input type="text" name="Id" value={Id} onChange={(e)=>setId(e.target.value)} />
        <input type="text" name="Name" value={Name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" name="FatherName"  value={FatherName} onChange={(e)=>setFatherName(e.target.value)}/>
        <input type="text" name="Phone" value={Phone} onChange={(e)=>setPhone(e.target.value)}/>
        <input type="submit"  />
    </form>
    
</div>
  )
}

export default Increase