import React, { useState } from 'react';

function Navigation(props) {
    const {
        tabs = []
    } = props;
    const [currentTab, setCurrentTab] =useState(tabs[0]);

    function tabSelected(name) {
        console.log(`${name} was clicked!`)
    }

    return (
        <nav>
            <ul>
                {tabs.map((tab) => (
                    <li
                        key={tab.name}
                    >
                        <span onClick={() => tabSelected(tab.name)}>
                            {tab.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;