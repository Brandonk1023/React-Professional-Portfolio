import React from 'react';

const Navigation =  ({ selectedSection, setSelectedSection}) => {
    const sections = ['About Me', 'Portfolio', 'Contact', 'Resume']

    return (
        <nav class="flex justify-center">
            <ul class=" flex flex-row">
                {sections.map(section => (
                    <li key={section}>
                        <button class="btn btn-primary btn-outline" onClick={() => setSelectedSection(section)} >
                            {section}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation