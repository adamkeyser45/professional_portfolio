import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {
    const [formState, setFormState] = useState({ user_name: '', user_email: '', message: '' });
    const { user_name, user_email, message } = formState;

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_c9stz1g', 'contact_form', e.target, 'user_ZRlN0yUdKxMFFwwvai0rs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    setFormState({ user_name:"", user_email:"", message:"" });
  }

  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value })
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
        <h6 className="text-center">Use this form to send me an email or at: adam.keyser45@gmail.com</h6>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input 
                type="text" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter name"
                name="user_name"
                value={user_name}
                onChange={handleChange}
                 />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter Email"
                name="user_email"
                value={user_email}
                onChange={handleChange}
                />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Your Message</label>
            <textarea 
                className="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3" 
                name="message"
                value={message}
                onChange={handleChange} >
            </textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
    </form>
  );
}