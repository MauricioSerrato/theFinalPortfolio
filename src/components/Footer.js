
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
  );
}

export default Footer;