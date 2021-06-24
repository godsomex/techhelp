  import React from 'react'

function Details() {
    return (
        <div className="details">
            <div>
                <h4>ABOUT US</h4>
                <ul>
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
                <ul>
                    <li><a href=" ">Press Releases</a></li>
                    <li><a href=" ">Awards</a></li>
                    <li><a href=" ">Testimonials</a></li>
                    <li><a href=" ">Timeline</a></li>
                </ul>
            </div>
            <div className="newsletter">
                <h4>Join Our Newsletter</h4>
                    <p>Subscribe to our newsletter to get your weekly dose of news, updates, tips and special offers.</p>
                <div className="register-for-newsletter">
                    <input placeholder="Enter yor email address" type="text" id="subscribe"/>
                    <input type= "submit" id="footer-email-btn"/>
                </div>
            </div> 
        </div>
    )
}

export default Details
