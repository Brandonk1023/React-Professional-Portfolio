import React from 'react';
import linkedinLogo from '../assets/logos/linkedInFooterLogo.png';
import githubLogo from '../assets/logos/gitHubFooterLogo.png';

const Footer = () => {
    return (
        <footer>
            <div>
                <a href='https://www.linkedin.com/in/charles-kilgore-69695b135/'>
                    <img src={linkedinLogo} alt='LinkedIn Logo'/>
                </a>
                <a href='https://github.com/Brandonk1023'>
                    <img src={githubLogo} alt='GitHub Logo'/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;