import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddStudent from './AddStudent'
import DeleteStudent from './DeleteStudent'

import Embeds from './Embeds'
import GetStudents from './GetStudents'


function RightBar() {
  return (
    <div>
        <Routes>
      
            <Route path='/' element={<Embeds/>}/>
            <Route path='/AddStudent' element={<AddStudent/>}/>
            <Route path='/GetStudents' element={<GetStudents/>}/>
            <Route path='/DeleteStudent' element={<DeleteStudent/>}/>
           
            
            
        </Routes>
    </div>
  )
}

export default RightBar