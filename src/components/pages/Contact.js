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

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section>
            <div id="contact-card" className="card">
                <div className="card-body">
                    <h1 className="card-title">Contact Me</h1>

                    <div className="card" style={{width:"18rem"}}>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="px-2">
                            <label htmlFor="Name">Name:</label>
                            <br/>
                            <input type="text" name="Name" defaultValue={name} onBlur={handleChange} style={{width:"16rem"}}/>
                        </div>
                        <div className="px-2">
                            <label htmlFor="email">Email address:</label>
                            <br/>
                            <input type="email" name="email" defaultValue={email} onBlur={handleChange} style={{width:"16rem"}}/>
                        </div>
                        <div className="px-2">
                            <label htmlFor="Message">Message:</label>
                            <br/>
                            <textarea name="Message" rows="5" defaultValue={message} onBlur={handleChange} style={{width:"16rem"}}/>
                        </div>
                        {errorMessage && (
                            <div className="px-2">
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button className="btn btn-primary m-2" type="submit">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        


        
        </section>

        
    
    )
}

export default Contact;