import React from 'react';

function Resume() {
    return (
        <div className="card m-5" style={{border: "none"}}>
            <ul className="list-unstyled">
                <li>Front-End Proficiencies</li>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Responsive Design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                    <br/>
                <li>Back-End Proficiencies</li>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>REST</li>
                        <li>MongoDB, Mongoose</li>
                    </ul>
            </ul>
        </div>
    )
}

export default Resume;