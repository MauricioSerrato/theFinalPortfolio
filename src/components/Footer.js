
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md'


const Footer = ({setProjects, setHome, setIntro, setAbout, setBar, bar, setContact}) => {
  const openContacts = () => {
    setContact(true)
    setHome(false)
    setProjects(false)
    setAbout(false)
  }
  return (
    <></>
    // <Navbar  className="bottom" sticky="">
    //   <Container>
    //     <Navbar.Brand className="occupation"> Software Engineer</Navbar.Brand>
    //     <Navbar.Toggle />
    //     <Navbar.Collapse className="justify-content-end"> 
    //       <Navbar.Text >
    //         <a href='https://www.linkedin.com/in/mauricioserrato/' target="_blank" rel='noreferrer' >
    //         <FaLinkedin id="LinkedIn"/>
    //         </a>
    //       </Navbar.Text>
    //       <Navbar.Text>
    //         <a href="https://github.com/MauricioSerrato" target="_blank" rel='noreferrer'>
    //           <FaGithub id="Git"/>
    //         </a>  
    //       </Navbar.Text>
    //       <Navbar.Text>
    //           <MdEmail  onClick={openContacts} id="email"/>
             
    //       </Navbar.Text>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default Footer;