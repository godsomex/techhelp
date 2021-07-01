import React from 'react'
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// library.add(fab);

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SocialMedia() {
    return (
        <div >
            <h4 className="h4-title"> FOLLOW US </h4>
            <div className="icons">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
                <FontAwesomeIcon icon={["fab", "instagram"]} />
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
                <FontAwesomeIcon icon={["fab", "twitter"]} />
                <FontAwesomeIcon icon={["fab", "google-plus"]} />
                <FontAwesomeIcon icon={["fab", "pinterest"]} />
                <FontAwesomeIcon icon={["fab", "behance"]} />
            </div>
                {/* <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-google-plus-g"></i>
                <i class="fab fa-pinterest-p"></i>
                <i class="fab fa-behance"></i> */}
        </div>
    )
}

export default SocialMedia
