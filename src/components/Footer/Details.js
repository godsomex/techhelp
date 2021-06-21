import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function details() {
    return (
        <div className="details">
            <div>
                <h4>ABOUT US</h4>
                <ul>
                    <li> <a href=" ">Our Customers</a></li>
                    <li><a href=" ">Our Customers</a></li>
                    <li><a href=" ">Our Developers</a></li>
                    <li><a href=" ">Our Investors</a></li>
                </ul>
            </div>
            <div>
                <h4>OUR SERVICES</h4>
                <ul>
                    <li><a href=" ">Support</a></li>
                    <li><a href=" ">Jobs</a></li>
                    <li><a href=" ">Sponsorships</a></li>
                </ul>
            </div>
            <div>
                <h4>PRESS</h4>
                <ul>
                    <li><a href=" ">Press Releases</a></li>
                    <li><a href=" ">Awards</a></li>
                    <li><a href=" ">Testimonials</a></li>
                    <li><a href=" ">Timeline</a></li>
                </ul>
            </div>
            <div className="newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Subscribe to our newsletter to get your weekly dose of news, updates, tips and special offers</p>
                <div className="register-for-newsletter">
                <FontAwesomeIcon icon={["far", "envelope"]} />
                    {/* <i className="far fa-envelope"></i> */}
                    <input
                       type="email"
                        placeholder="Enter your email address"
                        id="subscribe"
                    />
                    <input type="Submit" value="Subscribe" id="footer-email-btn" />
                </div>
            </div>
        </div>
    )
}

export default details
