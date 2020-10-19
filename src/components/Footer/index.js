import React from 'react';

function Footer() {
    return (
        <footer className="footer fixed-bottom bg-light">
            <div className="d-flex justify-content-center mb-5 mb-lg-0">
                <a className="btn btn-outline-light btn-social mx-1" 
                    href="https://www.facebook.com/adam.keyser">
                        <i class="fab fa-fw fa-facebook-f fa-lg" style={{background:"SkyBlue"}}></i></a>
                <a className="btn btn-outline-light btn-social mx-1" 
                    href="https://github.com/adamkeyser45">
                        <i class="fab fa-fw fa-github fa-lg" style={{background:"SkyBlue"}}></i></a>
                <a className="btn btn-outline-light btn-social mx-1" 
                    href="https://www.linkedin.com/in/adam-keyser-693741107/">
                        <i class="fab fa-fw fa-linkedin-in fa-lg" style={{background:"SkyBlue"}}></i></a>
            </div>
            <span className="d-flex justify-content-center text-muted mx-auto">
                Copyright © Adam Keyser 2020
            </span>
        </footer>
    )
}

export default Footer;