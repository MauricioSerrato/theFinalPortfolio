


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
    <></>

  )
}

export default Topbar;