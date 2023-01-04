import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
function GetStudents() {
    const [Student,setStudents]=useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:3000/Student')
        .then(res=>{
            setStudents(res.data)
        })
        .catch(res=>
            {
                console.log(res);
            })
    })

  return (
    <div>
        <center>
<Table  bordered hover responsive>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Father Name</th>
            <th>phone</th>
        </tr>
    </thead>
    <tbody>
        {
            Student.map((stu)=>{
                return(
                    <tr key={stu.id}>
                        <td>{stu.id}</td>
                        <td>{stu.Name}</td>
                        <td>{stu.FatherName}</td>
                        <td>{stu.Phone}</td>
                    </tr>
                )
            })
        }
    </tbody>
</Table>
</center>
    </div>
  )
}

export default GetStudents