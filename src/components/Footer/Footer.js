import React from 'react'
import SocialMedia from './SocialMedia'
import Details from './Details'
import './Footer.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab);
library.add(far);


function Footer() {
    return (
        <div className="footer-container">
            <div id="foot-container">
                <SocialMedia/>
                <Details/>
            </div>
        </div>
    )
}

export default Footer
 