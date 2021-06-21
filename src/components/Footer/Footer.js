import React from 'react'
import SocialMedia from './SocialMedia'
import Details from './Details'
import FooterContent from './FooterContent'
import '../footer.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab);
library.add(far);


function Footer() {
    return (
        <div className="footer-container">
            <section className="foot-container">
                <SocialMedia/>
                <Details/>
            </section>
            <FooterContent/>
        </div>
    )
}

export default Footer
 