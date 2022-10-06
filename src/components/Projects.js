import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Projects = () => {
  return (
    <>
    <Card className="cardcontainer">
      <img className="braveheart" src="./BraveHeart.png" alt='braveheart'/>
      <Card.Body className='cardItems'>
        <Card.Title>BraveHeart</Card.Title>
        <Card.Text>
            BraveHeart is a full stack application that allows its users to keep track of their progressive overload during workouts, have a variety of workouts to choose from (with tutorials), target specific areas to train, while also providign other features like healthy foods, and in app virtual meetings. This appilcation was built using Node.js, Mongoose, Express, Ejs, Bootstrap, Html, and Css. 
        </Card.Text>
        <a href="https://www.google.com/url?q=https://infinite-escarpment-98027.herokuapp.com/home&sa=D&source=editors&ust=1663951725254830&usg=AOvVaw09SCKxSxtcV8Lhc33uX4FS" target="_blank" rel='noreferrer'>
        <Button  className="btn">Visit Site</Button>
        </a>
        <a href='https://github.com/MauricioSerrato/BraveHeart'>
        <Button className="btn">Visit Git Repo</Button>
        </a>

      </Card.Body>
    </Card>

    <Card className="cardcontainer">
      <img className="braveheart"  src="./comicworld.png" alt='comicworld' />
      <Card.Body className="cardItems">
        <Card.Title>Comic World</Card.Title>
        <Card.Text>
            Comic World is a Full Stack Application built around the interest for comics and superheros that allows its users to have all CRUD (create, remove, update, and delete) comics. This Group project was built usign the MERN stack: Node.js, Mongoose, Express, and React.js. 
        </Card.Text>
        <a href='https://fierce-stream-03665.herokuapp.com'target="_blank" rel='noreferrer'>
        <Button  className="btn">Visit Site</Button>
        </a>
        <a href='https://github.com/moodzter/Front_End_Marvel'target="_blank" rel='noreferrer'>
        <Button className="btn">Visit Git Repo</Button>
        </a>
      </Card.Body>
    </Card>

    <Card className="cardcontainer">
      <img className="braveheart" src="./Yello.png" alt='yelloapp'/>
      <Card.Body className="cardItems">
        <Card.Title>Yello</Card.Title>
        <Card.Text>
          Yello! An application built as a social media platform. This group project was created in the intent for its users to express their happy times to other users. It is a fullt stack application usign Django API server as a backend and React as a Front End. This application was created with multiple model to model realtions if the back end so that each post had multiple comments. This application has full CRUD funcationality.
        </Card.Text>
        <a href="https://boiling-lake-14034.herokuapp.com/login" target="_blank" rel='noreferrer'>
        <Button  className="btn">Visit Site</Button>
        </a>
        <a href="https://github.com/amiemora/yello_backend_2" target="_blank" rel='noreferrer'>
        <Button className="btn">Visit Git Repo</Button>
        </a>
      </Card.Body>
    </Card>


    <Card className="cardcontainer">
      <img className="braveheart" src="./Dial'n.png" alt='yelloapp'/>
      <Card.Body className="cardItems">
        <Card.Title>Yello</Card.Title>
        <Card.Text>
          Dail.N an application Developed with Ruby on Rail . This project was created in the intent for its users to log in and create post that will track time posted woker ID of who posted and the locations. This application was created with multiple routes as well as custom css/bootstrap, and a variety of Ruby Gems (Devise, Geocoder). This application also has full CRUD funcationality on the post and user accounts.
        </Card.Text>
        <a href="https://intense-spire-56626.herokuapp.com/" target="_blank" rel='noreferrer'>
        <Button  className="btn">Visit Site</Button>
        </a>
        <a href="https://github.com/MauricioSerrato/clockIn" target="_blank" rel='noreferrer'>
        <Button className="btn">Visit Git Repo</Button>
        </a>
      </Card.Body>
    </Card>
    </>
  );
}

export default Projects

