import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

const NavBar = () => {
 return (
   <div>
   <Navbar bg="dark" variant="dark">
     <Container>
       <Navbar.Brand href="#home">SQUARETIME</Navbar.Brand>
       <Nav className="me-auto">
         <Nav.Link href="#home">Home</Nav.Link>
         <Nav.Link href="#Addblog">Addblog</Nav.Link>
      
       </Nav>
     </Container>
   </Navbar>
   </div>
       
 );
};

export default NavBar;
   
   