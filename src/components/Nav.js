
import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Topbar = ({setProjects, setHome, setIntro, setAbout, setBar, setContact}) => {

const openProjects = () => {
  setProjects(true)
  setHome(false)
  setContact(false)
  setAbout(false)
  }

const openHome = () => {
  setHome(true)
  setIntro(true)
  setProjects(false)
  setAbout(false)
  setContact(false)

}

const getAbout = () => {
  setIntro(false)
  setAbout(true)
  setProjects(false)
  setContact(false)


}

const openContacts = () => {
  setContact(true)
  setHome(false)
  setProjects(false)
  setAbout(false)
}




  return (
    <Navbar bg="" variant="dark" sticky=""  className=''>
    <Container >
      <div>
      <Navbar.Brand >
        <img className='logo' src='./logo.png' alt='logo'/>
      </Navbar.Brand>
      </div>
      <div>
      <Nav className="me-auto">
        <Nav.Link className="navItems" onClick={() => {openHome()}} >Home</Nav.Link>
        <Nav.Link className="navItems" onClick={() => {getAbout()}} >About</Nav.Link>
        <Nav.Link className="navItems" onClick={()=> {openProjects()}} >Projects</Nav.Link>
        <Nav.Link className="navItems" onClick={() => {openContacts()}} >Contact</Nav.Link>
      </Nav>
      </div>
    </Container>
  </Navbar>
  );
}

export default Topbar;