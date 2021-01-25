import React from 'react';

function About() {
    return (
        <div className="jumbotron">
            <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-3">
                <img id="adam-portrait" className="mx-auto mt-2 d-block" src={require("../../assets/img/adam_portrait_small.png")} 
                        alt="A protrait of Adam Keyser"/>
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h1 className="display-4">About Me</h1>
                        <p className="lead">
                            As a web developer, it is my goal to help create websites, applications, 
                            and tools that can be used by the masses to help improve their lives.
                        </p>
                    </div>
                </div>
            </div>
            </div>

            <hr className="my-4" />
            <h4>My Journey</h4>
            <p>
                My professional journey to coding began differently than most programmers. It started when I graduated college with a degree 
                in Elementary Education. My first teaching position as a 4th grade ELA and Social Studies teacher was at Hazelwood Elementary in 
                Clarksville, Tennessee. After working there for two years, I found a similar job in Nashville, TN. It was my two years at Inglewood 
                Elementary where I really took interest in coding.
            </p>
            <p>
                Inglewood is a STEAM Magnet School. Science, Technology, Engineering, Arts, and Math were to be incorporated in every aspect of 
                the school. Even the playground equipment outside could be programmed with a basic coding language, Scratch, to make sounds and 
                noises when interacted with by students. I began to see what amazing things could be done when you can incorporate education and 
                programming.
            </p>
            <p>
                This is when I decided to make a change of careers, and pursue a career in Web Development. I began an online Coding Bootcamp through
                Vanderbilt University, where I earned a certificate in Full-Stack Web Development. I am now seeking employment on a Web Development team!
            </p>
        </div>
    )
}

export default About;