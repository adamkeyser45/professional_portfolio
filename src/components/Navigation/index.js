import React from 'react';

function Navigation(props) {
    const {
        tabs = []
    } = props;

    return (
        <nav>
            <ul>
                {tabs.map((tab) => (
                    <li
                        key={tab.name}
                    >
                        <span>
                            {tab.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;