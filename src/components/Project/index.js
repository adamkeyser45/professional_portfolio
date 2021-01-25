import React from 'react';

function Project() {
    const projects = [
        {
            name: 'Tandem Quiz App',
            image: require('../../assets/img/tandem_small.png'),
            deployedLink: 'https://adamkeyser45.github.io/tandem-quiz/',
            repoLink: 'https://github.com/adamkeyser45/tandem-quiz',
            description: 'A quiz application for you to practice trivia!',
            technologies: 'HTML, CSS, Javascript, React, Bootstrap'
        },
        {
            name: 'javaDript',
            image: require('../../assets/img/javaDript_small.png'),
            deployedLink: 'https://sleepy-garden-49427.herokuapp.com/#',
            repoLink: 'https://github.com/adamkeyser45/javadript',
            description: 'A coffee subscription box service for coders and web developers!',
            technologies: 'HTML, CSS, Javascript, React, Express.js, nodeJS, jest, bcrypt, graphQL'
        },
        {
            name: 'The Speakeasy',
            image: require('../../assets/img/speakeasy_small.png'),
            deployedLink: 'https://fierce-forest-64673.herokuapp.com/',
            repoLink: 'https://github.com/adamkeyser45/thespeakeasy',
            description: 'The Speakeasy is a Full Stack Web Application where people can share, post, comment, and rate bevarage recipes.',
            technologies: 'HTML, CSS, Javascript, Handlebars, Foundation, Express.js, nodeJS, jest, bcrypt, MySQL, Sequelize, graphQL'
        },
        {
            name: 'News By The Map',
            image: require('../../assets/img/news_by_the_map_small.png'),
            deployedLink: 'https://adamkeyser45.github.io/newsbythemap/',
            repoLink: 'https://github.com/adamkeyser45/newsbythemap',
            description: 'News By The Map is a web application that brings you the latest news based off of a searched location using Google Maps.',
            technologies: 'HTML, CSS, Javascript, Bulma, Moment.js, jQuery'
        },
        {
            name: 'Tech Blog',
            image: require('../../assets/img/tech_blog_small.png'),
            deployedLink: 'https://calm-garden-95272.herokuapp.com/',
            repoLink: 'https://github.com/adamkeyser45/mod14challenge',
            description: 'A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.',
            technologies: 'HTML, CSS, Javascript, Handlebars, MySQL2, Sequelize, Express.js'
        },
        {
            name: 'Budget Tracker',
            image: require('../../assets/img/budget_tracker_small.png'),
            deployedLink: 'https://nameless-anchorage-01032.herokuapp.com/',
            repoLink: 'https://github.com/adamkeyser45/mod19challenge',
            description: 'Updating an existing budget tracker application to allow for offline access and functionality.',
            technologies: 'HTML, CSS, Javascript, IndexedDB'
        },
        {
            name: 'NoSQL Social Network API',
            image: require('../../assets/img/social_network_api_small.png'),
            deployedLink: 'https://github.com/adamkeyser45/mod18challenge/blob/main/assets/mod18challenge-walkthrough.mp4',
            repoLink: 'https://github.com/adamkeyser45/mod18challenge',
            description: 'An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.',
            technologies: 'Express.js, Mongoose, NoSQL'
        },
        {
            name: 'RegEx Tutorial- Matching a URL',
            image: require('../../assets/img/regex_small.png'),
            deployedLink: 'https://gist.github.com/adamkeyser45/07edab6a0a308e48deb96f6136dadd01',
            repoLink: 'https://gist.github.com/adamkeyser45/07edab6a0a308e48deb96f6136dadd01',
            description: 'A tutorial to teach individuals about Regular Expressions, and how to use one to match for a URL.',
            technologies: 'RegEx'
        }
    ]

    return (
        <div >
            {projects.map(project => (
                <div className="row">
                    <div className="media border col-12" key={project.name}>
                        <div className="row">
                            <div className="project-img">
                                <img src={project.image} className="mr-3 p-2" alt=""/>
                            </div>
                            <div className="">
                                <div className="media-body">
                                    <h5 className="mt-0">{project.name}</h5>
                                    <p>{project.description}</p>
                                    <p>Technologies Used: {project.technologies}</p>
                                    <a className="btn btn-primary m-1 p-2" href={project.deployedLink} target="_blank" rel="noopener noreferrer">Check out the App!</a>
                                    <a className="btn btn-primary m-1 p-2" href={project.repoLink} target="_blank" rel="noopener noreferrer">Check out the GitHub Repo!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project;