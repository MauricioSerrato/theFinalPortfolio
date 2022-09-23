
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com'
import React, {useRef} from 'react'





const Contact = () => {

    const form = useRef()


const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_kex5eip', 'template_yxxdd5e',form.current,'QCkb3juPr0Mq3F5IA')
    .then((result) => {
        console.log(result.text);
        alert(`I've recived your message I'll get back to you soon. Thank you!`)
    }, (error) => {
        console.log(error.text);
    });
};  

    return(
      <>
      <h1 className='contactMessage'> For any inqueries please complete the form below, I look foward to hearing from you. Thank you!</h1>
        <Form className='form'  ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter name" />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" name='user_email' placeholder="Email" />
            <h5>
                 We'll never share your email with anyone else
            </h5>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          
        </Form.Group>

        <h5> Message:</h5>
  
        <Form.Group className="formbox3" controlId="formBasicEmail">
     
          <textarea  name="message" rows='6'/>
        </Form.Group>
        <div className="senderParent">
        <Button variant="danger" className='sender'type="submit">
          Submit
        </Button>
        </div>
      </Form>

    </>
    )
}

export default Contact
