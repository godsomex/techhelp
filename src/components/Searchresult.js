import React from 'react'
import './Searchresult.css';

function Searchresult() {
    return (
        <div className="container">
            <div className="head-tags">
                <ul className="tags">
                    <li>People</li>
                    <li>Posts</li>
                    <li>Jobs</li>
                    <li>Groups</li>
                    <li>tags</li>
                </ul>
            </div>
            

            <div className="top-card card"> 
                <h2>People</h2>

                <div className="profile">
                    <div className="left-container">
                        <div className="image-container">
                            <img src="" alt="" height="50em" />
                        </div>
                    </div>

                    <div className="right-container"> 
                        <h3>John Doe</h3>
                        <h5>Software Developer</h5>
                        <p>PortHarcourt, Nigeria</p>
                        <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    </div>
                </div>

                <div className="profile">
                    <div className="left-container">
                        <div className="image-container">
                            <img src="" alt="" height="50em" />
                        </div>
                    </div>

                    <div className="right-container"> 
                        <h3>Jane Doe</h3>
                        <h5>Software Developer</h5>
                        <p>Lagos, Nigeria</p>
                        <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    </div>
                </div>

                <div className="profile">
                    <div className="left-container">
                        <div className="image-container">
                            <img src="" alt="" height="50em" />
                        </div>
                    </div>

                    <div className="right-container"> 
                        <h3>Jack Don</h3>
                        <h5>Software Developer</h5>
                        <p>Abuja, Nigeria</p>
                        <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    </div>
                </div>
                

                <p className="see-more">See all people results</p>
            </div>

            <div className="card">
                <h2>Posts</h2>

                <div className="post">
                    <img src="" alt="" className="post-image" />
                    <div class="post-preview">
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p className="preview-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ea! Quis est ipsa eaque reprehenderit.</p>
                    </div>
                </div>

                <div className="post">
                    <img src="" alt="" className="post-image" />
                    <div class="post-preview">
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p className="preview-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ea! Quis est ipsa eaque reprehenderit.</p>
                    </div>
                </div>

                <div className="post">
                    <img src="" alt="" className="post-image" />
                    <div class="post-preview">
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p className="preview-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ea! Quis est ipsa eaque reprehenderit.</p>
                    </div>
                </div>

                <p className="see-more">See all post results</p>
            </div>
        </div>
       
    )
}

export default Searchresult
 