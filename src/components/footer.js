import React from 'react';
import linkedinLogo from '../assets/logos/linkedInFooterLogo.png';
import githubLogo from '../assets/logos/gitHubFooterLogo.png';

const Footer = () => {
    return (
        <footer>
            <div class=" flex flex-row justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <a href='https://www.linkedin.com/in/charles-kilgore-69695b135/'>
                    <img className="w-32 rounded"  src={linkedinLogo} alt='LinkedIn Logo'/>
                </a>
                <a href='https://github.com/Brandonk1023'>
                    <img className="w-32 rounded" src={githubLogo} alt='GitHub Logo'/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;