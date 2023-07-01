import React from 'react';

const navigation =  ({ selectedSection, setSelectedSection}) => {
    const sections = ['About Me', 'Portfolio', 'Contact', 'Resume']

    return (
        <nav>
            <ul>
                {sections.map(section => (
                    <li key={section}>
                        <button>
                            {section}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default navigation