import React from 'react';

function Resume() {
    return (
        <div id="resume-card" className="card m-5" style={{border: "none"}}>
            <div className="row">
                <ul className="list-unstyled col-12 col-md-4" >
                    <li className="h2 m-2 text-center">Front-End Proficiencies</li>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Responsive Design</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                </ul>
                <ul className="list-unstyled col-12 col-md-4" >
                    <li className="h2 m-2 text-center">Back-End Proficiencies</li>
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>REST</li>
                            <li>MongoDB, Mongoose</li>
                        </ul>
                </ul>

                <ul className="list-unstyled col-12 col-md-4" >
                    <li className="h2 m-2 text-center">Click to Resume Download</li>
                    <ul  className="list-unstyled text-center">
                        <a className="" href={require("../../assets/Adam_Keyser_Resume.pdf")} download >
                        <i className="far fa-file-pdf fa-7x mb-2" style={{width: "100px"}}></i>
                        </a>
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default Resume;