import React from 'react';

const Navigation =  ({ selectedSection, setSelectedSection}) => {
    const sections = ['About Me', 'Portfolio', 'Contact', 'Resume']

    return (
        <nav>
            <ul>
                {sections.map(section => (
                    <li key={section}>
                        <button class="btn btn-primary" onClick={() => setSelectedSection(section)} >
                            {section}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation