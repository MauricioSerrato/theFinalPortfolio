import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Footer = ({setProjects, setHome, setAbout, setContact}) => {
  const openContacts = () => {
    setContact(true)
    setHome(false)
    setProjects(false)
    setAbout(false)
  }
  return (
    <Navbar  className="bottom" sticky="">
      <Container>
        <Navbar.Brand className="occupation"> Software Engineer</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"> 
          <Navbar.Text >
            <a href='https://www.linkedin.com/in/mauricioserrato/' target="_blank" rel='noreferrer' >
            <i class="bi bi-linkedin" id='LinkedIn'></i>
            
            </a>
          </Navbar.Text>
          <Navbar.Text>
            <a href="https://github.com/MauricioSerrato" target="_blank" rel='noreferrer'>
            <i class="bi bi-github" id='Git'></i>
              
            </a>  
          </Navbar.Text>
          <Navbar.Text>
              <i class="bi bi-envelope" onClick={openContacts} id="email"></i>
             
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;