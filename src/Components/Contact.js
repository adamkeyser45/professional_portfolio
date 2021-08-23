import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact(props) {

   if (props.data) {
      var name = props.data.name;
      var street = props.data.address.street;
      var city = props.data.address.city;
      var state = props.data.address.state;
      var zip = props.data.address.zip;
      var phone = props.data.phone;
      var message = props.data.contactmessage;
   }

   const [formState, setFormState] = useState({ user_name: '', user_email: '', eMessage: '' });
   const { user_name, user_email, eMessage } = formState;

   function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('service_c9stz1g', 'contact_form', e.target, 'user_ZRlN0yUdKxMFFwwvai0rs')
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });

      setFormState({ user_name: "", user_email: "", eMessage: "" });
   }

   function handleChange(e) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
   }

   return (
      <section id="contact">

         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
               <p className="lead">{message}</p>
            </div>
         </div>

         <div className="row">
            <div className="eight columns">
               <form action="" method="post" id="contactForm" name="contactForm" onSubmit={sendEmail}>
                  <fieldset>
                     <div>
                        <label htmlFor="contactName">Name<span className="required">*</span></label>
                        <input type="text"  size="35" id="contactName" name="user_name" value={user_name} onChange={handleChange} />
                     </div>

                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="text"  size="35" id="contactEmail" name="user_email" value={user_email} onChange={handleChange} />
                     </div>

                     {/* <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={handleChange} />
                        </div> */}

                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols="50" rows="7" id="contactMessage" name="eMessage" value={eMessage} onChange={handleChange}></textarea>
                     </div>

                     <div>
                        <button className="submit" type="submit">Submit</button>
                        <span id="image-loader">
                           <img alt="" src="images/loader.gif" />
                        </span>
                     </div>
                  </fieldset>
               </form>

               <div id="message-warning"> Error boy</div>
               <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
               </div>
            </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
                  <h4>Address and Phone</h4>
                  <p className="address">
                     {name}<br />
                     {street} <br />
                     {city}, {state} {zip}<br />
                     <span>{phone}</span>
                  </p>
               </div>
            </aside>
         </div>
      </section>
   );
}

export default Contact