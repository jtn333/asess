import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Addblog from './pages/Addblog';
import NavBar from './units/NavBar';
import  { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import RegisterForm from './pages/Addblog'






export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));
  }, []);
 
  return (
    <div> 
      <NavBar></NavBar>
       <Routes>
          <Route path="/home.jsx" element={<Home />} />
          <Route path="/Addblog.jsx" element={<Addblog />} />
          
       </Routes>
       { <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              
            </tr>
          ))}
        </tbody>
      </Table> }

      <RegisterForm/>
       </div>
    
    
    
   
  )
  }
