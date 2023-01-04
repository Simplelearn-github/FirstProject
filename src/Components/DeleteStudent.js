import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

function DeleteStudent() {
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
    function deleteStudent(id){
        axios.delete(`http://localhost:3000/Student/${id}`)
        .then(res=>{
            alert('Deleted successfully',res)
        })
        .catch(res=>{
            alert('Unable to delete',res)
        })

    }

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
                        <td><button onClick={()=>deleteStudent(stu.id)}>Delete Student</button></td>
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


export default DeleteStudent