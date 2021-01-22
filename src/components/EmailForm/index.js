import React from 'react';
import emailjs from 'emailjs-com';

// import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_c9stz1g', 'contact_form', e.target, 'user_ZRlN0yUdKxMFFwwvai0rs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
        <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" name="user_name" />
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="user_email"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Your Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
    </form>
  );
}