import React from 'react';

function About() {
    return (
        <div className="jumbotron">
            <img className="img-fluid" src={require("../../assets/img/adam_portrait_small.png")} 
                alt="A protrait of Adam Keyser"/>
            <h1 className="display-3">About Me</h1>
            <p className="lead">
                As a web developer, it is my goal to help create websites, applications, 
                and tools that can be used by the masses to help improve their lives.
            </p>
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
                Vanderbilt University, where I am earning a certificate in Full-Stack Web Development.
            </p>
        </div>
    )
}

export default About;