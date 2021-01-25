import React from 'react';

function Resume() {
    return (
        <div id="resume-card" className="card m-5" style={{border: "none"}}>
            <div className="row">
                <ul className="list-unstyled col-12 col-md-4" >
                    <li className="h2 m-2 text-center">Front-End Proficiencies</li>
                        <ul className="list-group">
                            <li className="list-group-item mx-3 text-center h5">HTML</li>
                            <li className="list-group-item mx-3 text-center h5">CSS</li>
                            <li className="list-group-item mx-3 text-center h5">JavaScript</li>
                            <li className="list-group-item mx-3 text-center h5">jQuery</li>
                            <li className="list-group-item mx-3 text-center h5">Responsive Design</li>
                            <li className="list-group-item mx-3 text-center h5">React</li>
                            <li className="list-group-item mx-3 text-center h5">Bootstrap</li>
                        </ul>
                </ul>
                <ul className="list-unstyled col-12 col-md-4" >
                    <li className="h2 m-2 text-center">Back-End Proficiencies</li>
                        <ul className="list-group">
                            <li className="list-group-item mx-3 text-center h5">APIs</li>
                            <li className="list-group-item mx-3 text-center h5">Node</li>
                            <li className="list-group-item mx-3 text-center h5">Express</li>
                            <li className="list-group-item mx-3 text-center h5">MySQL, Sequelize</li>
                            <li className="list-group-item mx-3 text-center h5">REST</li>
                            <li className="list-group-item mx-3 text-center h5">MongoDB/Mongoose</li>
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