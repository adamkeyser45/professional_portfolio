import React from 'react';

function Resume() {
    return (
        <div className="card m-5" style={{border: "none"}}>
            <div className="row">
                <ul className="list-unstyled" style={{width: "33%"}}>
                    <li className="h2">Front-End Proficiencies</li>
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
                <ul className="list-unstyled" style={{width: "33%"}}>
                    <li className="h2">Back-End Proficiencies</li>
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>REST</li>
                            <li>MongoDB, Mongoose</li>
                        </ul>
                </ul>

                <div className="card text-center" style={{width: "33%", border: "none"}}>
                    <h2>Click here to download my Full Resume</h2>
                    <a href={require("../../assets/Adam_Keyser_Resume.pdf")} download>
                    <i className="far fa-file-pdf fa-7x mx-auto" style={{width: "100px"}}></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Resume;