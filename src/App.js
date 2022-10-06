
import Topbar from './components/Nav.js'
import Footer from './components/Footer';
import Projects from './components/Projects';
import {useState} from 'react';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import './App.css'
import Resume from './components/Resume'
function App() {

let [projects, setProjects] = useState(false);
let [home, setHome] = useState(true);
let [resume, setResume]= useState(false);
const [intro, setIntro] = useState (true)
const [about, setAbout] = useState (false)
const [bar, setBar] = useState (true)
const [contact, setContact] = useState (false)  

  return (
    <>
    <Topbar setProjects={setProjects} setHome={setHome} setIntro={setIntro} setAbout={setAbout} setBar={setBar} bar={bar} setContact={setContact} setResume={setResume}/>
    <div className="skills">
        <img className='icon' src='/basic.png' />
        <img className='icon' src='/node.png' />
        <img  className='icon' src='https://edusera.org/wp-content/uploads/2021/02/what-is-react-1.jpg' />
        <img className='icon' src='https://miro.medium.com/max/450/1*MtuURq-9Fe3MZM5IZqQgyw.png' />
        <img className='icon' src='/python.png' />
        <img className='icon' src='/mongodb.png' />
        <img className='icon' src='/django.png' />
        <img className='icon' src='/postgres.png' />
        <img className='icon' src='/bootstrap.png' />




    </div>
    <div className="App">
      
    
    {contact? <Contact /> : null}

    {home ? < Home intro={intro} about={about} /> : null}
    {projects ? <Projects /> : null}
    {about ? <About/> : null}
    {resume? <Resume /> : null}
   
    {/* <Stars /> */}
          
    
    </div>
    <Footer setProjects={setProjects} setHome={setHome} setIntro={setIntro} setAbout={setAbout} setBar={setBar} bar={bar} setContact={setContact}/> 
    </>
  );
}
export default App;
