import React from 'react';
import EmailForm from '../EmailForm';

function Contact() {

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
                            <div id="contact-email" className="text-center col-6 col-md-3" style={{border: "none"}}>
                                <h2>Email</h2>
                                <a href='#'>
                                <i type="button"className="fas fa-envelope-open-text fa-7x mx-auto" style={{width: "100px"}} data-toggle="modal" data-target="#exampleModal">
                                </i></a>
                            </div>

                            <div id="contact-facebook" className="text-center col-6 col-md-3" style={{border: "none"}}>
                                <h2>Facebook</h2>
                                <a href="https://www.facebook.com/adam.keyser" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-square fa-7x mx-auto" style={{width: "100px"}}></i>
                                </a>
                            </div>

                            <div id="contact-github" className="text-center col-6 col-md-3" style={{border: "none"}}>
                                <h2>GitHub</h2>
                                <a href="https://github.com/adamkeyser45" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github-square fa-7x mx-auto" style={{width: "100px"}}></i>
                                </a>
                            </div>

                            <div id="contact-linkedin" className="text-center col-6 col-md-3" style={{border: "none"}}>
                                <h2>LinkedIn</h2>
                                <a href="https://www.linkedin.com/in/adam-keyser-693741107/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin fa-7x mx-auto" style={{width: "100px"}}></i>
                                </a>
                            </div>                
                        </div>
                    </div>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Send Me an Email</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                                <div className="modal-body">
                                    <EmailForm></EmailForm>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact;