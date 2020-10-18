import React, { useState } from 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';

// function Navigation(props) {
//     const {
//         tabs = []
//     } = props;
//     const [currentTab, setCurrentTab] =useState(tabs[0]);

//     function tabSelected(name) {
//         console.log(`${name} was clicked!`)
//     }

//     return (
//         <nav>
//             <ul>
//                 {tabs.map((tab) => (
//                     <li
//                         key={tab.name}
//                     >
//                         <span onClick={() => tabSelected(tab.name)}>
//                             {tab.name}
//                         </span>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// }

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#about">About Me</a>
                    <a className="nav-item nav-link" href="#portfolio">Portfolio</a>
                    <a className="nav-item nav-link" href="#contact">Contact</a>
                    <a className="nav-item nav-link" href="#resume" >Resume</a>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;