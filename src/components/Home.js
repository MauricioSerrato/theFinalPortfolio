
const Home = ({intro, about}) => {




    return(
      <>
        <div className="talk">
          {intro ? <div>
          <h2>Hello!</h2>
          <h1>I am Mauricio Serrato,</h1>
          <h2>Software Engineer.</h2>
          </div> : null}
          
        </div>
        <div className="nav"></div>
        <div className="elipse"> 
          <div className="inner"></div>
        </div>
    </> 
    )
    
    }
    
    export default Home