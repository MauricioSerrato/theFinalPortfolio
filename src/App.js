
import Topbar from './components/Nav.js'
import Footer from './components/Footer';
import Projects from './components/Projects';
import {useState} from 'react';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import './App.css'

function App() {

let [projects, setProjects] = useState(false);
let [home, setHome] = useState(true);
const [intro, setIntro] = useState (true)
const [about, setAbout] = useState (false)
const [bar, setBar] = useState (true)
const [contact, setContact] = useState (false)  

  return (
    <>
    <Topbar setProjects={setProjects} setHome={setHome} setIntro={setIntro} setAbout={setAbout} setBar={setBar} bar={bar} setContact={setContact}/>
    <div className="App">
    
    {contact? <Contact /> : null}

    {home ? < Home intro={intro} about={about} /> : null}
    {projects ? <Projects /> : null}
    {about ? <About/> : null}
   
    {/* <Stars /> */}
          
    
    </div>
    <Footer setProjects={setProjects} setHome={setHome} setIntro={setIntro} setAbout={setAbout} setBar={setBar} bar={bar} setContact={setContact}/> 
    </>
  );
}
export default App;
