import React, { useState } from 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';

function Navigation() {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
    const [currentTab, setCurrentTab] = useState('About');

    const renderPage = () => {
        switch (currentTab) {
            case 'Portfolio':
              return <Portfolio />;
            case 'Contact':
              return <Contact />;
            case 'Resume':
                return <Resume />
            default:
              return <About />;
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    {tabs.map(tab => (
                        <a 
                            className="nav-item nav-link" 
                            href={"#" + tab.toLowerCase()}
                            onClick={() => setCurrentTab(tab)}    
                        >
                            {tab}
                        </a>
                    ))}
                    </div>
                </div>
            </nav>
            <div>
                {renderPage()}
            </div> 
        </div>

    );
};

export default Navigation;


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