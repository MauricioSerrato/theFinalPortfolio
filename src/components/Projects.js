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
        <Button  className="btn">Visit Site</Button>
        <Button className="btn">Visit Git Repo</Button>

      </Card.Body>
    </Card>

    <Card className="cardcontainer">
      <img className="braveheart"  src="./comicworld.png" alt='comicworld' />
      <Card.Body className="cardItems">
        <Card.Title>Comic World</Card.Title>
        <Card.Text>
            Comic World is a Full Stack Application built around the interest for comics and superheros that allows its users to have all CRUD (create, remove, update, and delete) comics. This Group project was built usign the MERN stack: Node.js, Mongoose, Express, and React.js. 
        </Card.Text>
        <Button  className="btn">Visit Site</Button>
        <Button className="btn">Visit Git Repo</Button>
      </Card.Body>
    </Card>

    <Card className="cardcontainer">
      <img className="braveheart" src="./Yello.png" alt='yelloapp'/>
      <Card.Body className="cardItems">
        <Card.Title>Yello</Card.Title>
        <Card.Text>
          Yello! An application built as a social media platform. This group project was created in the intent for its users to express their happy times to other users. It is a fullt stack application usign Django API server as a backend and React as a Front End. This application was created with multiple model to model realtions if the back end so that each post had multiple comments. This application has full CRUD funcationality.
        </Card.Text>
        <Button  className="btn">Visit Site</Button>
        <Button className="btn">Visit Git Repo</Button>
      </Card.Body>
    </Card>

   
    </>
  );
}

export default Projects