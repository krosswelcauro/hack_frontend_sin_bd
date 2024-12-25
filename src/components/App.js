import React from 'react'
import  '../../src/index.css';
import { Navbar } from './Navbar'
import { Route, Routes } from 'react-router-dom';
import {UserList} from './UserList';
import { UserForm } from './UserForm';

export function App() {
  return (
    <div>
      <Navbar />

      <div>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/create-user' element={<UserForm />} />
          <Route path='/edit-user/:id' element={<UserForm />} />
        </Routes>
      </div>
    </div>
  )
}
