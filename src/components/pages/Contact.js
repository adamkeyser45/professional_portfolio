import React, { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }
        
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    }

    return (
        <section>
            <div id="contact-card" className="card">
                <div className="card-body">
                    <h1 className="card-title text-center">Contact Me</h1>

                    <h5 className="text-center">
                        Want to get in touch? Here are several ways to contact me!
                    </h5>

                    <div className="card border-0 mt-3">
                        <div className="row">
                            <div id="contact-email" className="text-center col-11 col-md-3" style={{border: "none"}}>
                                <h2>Email</h2>
                                <i className="fas fa-envelope-open-text fa-7x mx-auto" style={{width: "100px"}}></i>
                                <h5>adam.keyser45@gmail.com</h5>
                            </div>

                            <div id="contact-email" className="text-center col-11 col-md-3" style={{border: "none"}}>
                                <h2>Facebook</h2>
                                <i className="fab fa-facebook-square fa-7x mx-auto" style={{width: "100px"}}></i>
                            </div>

                            <div id="contact-email" className="text-center col-11 col-md-3" style={{border: "none"}}>
                                <h2>GitHub</h2>
                                <i className="fab fa-github-square fa-7x mx-auto" style={{width: "100px"}}></i>
                            </div>

                            <div id="contact-email" className="text-center col-11 col-md-3" style={{border: "none"}}>
                                <h2>LinkedIn</h2>
                                <i className="fab fa-linkedin fa-7x mx-auto" style={{width: "100px"}}></i>
                            </div>                
                        </div>

                    </div>
                </div>
            </div>
        


        
        </section>

        
    
    )
}

export default Contact;