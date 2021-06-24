<<<<<<< HEAD
  import React from 'react'

function Details() {
=======
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function details() {
>>>>>>> main
    return (
        <div className="details">
            <div>
                <h4>ABOUT US</h4>
                <ul>
<<<<<<< HEAD
                    <li><a href=" ">Our Developers</a></li>
                    <li><a href=" ">Our Services</a></li>
                    <li><a href=" ">Our Customers</a></li>
                    <li><a href=" ">Our Prices</a></li>
                    <li><a href=" ">Our Sponsors</a></li>
                </ul>
            </div>
            <div>
            <h4>OUR SERVICES</h4>
                <ul>
                    <li><a href=" ">Web Development</a></li>
                    <li><a href=" ">Mobile Development</a></li>
                    <li><a href=" ">Devops</a></li>
                    <li><a href=" ">Technical Writing</a></li>
                    <li><a href=" ">Code Review</a></li>
                </ul>
            </div>
            <div>
            <h4>PRESS</h4>
=======
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
>>>>>>> main
                <ul>
                    <li><a href=" ">Press Releases</a></li>
                    <li><a href=" ">Awards</a></li>
                    <li><a href=" ">Testimonials</a></li>
                    <li><a href=" ">Timeline</a></li>
                </ul>
            </div>
            <div className="newsletter">
                <h4>Join Our Newsletter</h4>
<<<<<<< HEAD
                    <p>Subscribe to our newsletter to get your weekly dose of news, updates, tips and special offers.</p>
                <div className="register-for-newsletter">
                    <input placeholder="Enter yor email address" type="text" id="subscribe"/>
                    <input type= "submit" id="footer-email-btn"/>
                </div>
            </div> 
=======
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
>>>>>>> main
        </div>
    )
}

<<<<<<< HEAD
export default Details
=======
export default details
>>>>>>> main
