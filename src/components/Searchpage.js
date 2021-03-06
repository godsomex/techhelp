import React from 'react';


import './Searchpage.css';
import './Searchresult.js';



const Searchpage = (props) => {
    console.log(props)
    const changeRoute  = () => {
        props.history.push("/Searchresult")
    }
    return (
        <div>
          <div className="header">
              <form>
                  <h1>Find The Right Developer For Your Company/Project</h1>
                  
                  <div className="form-box">
                        <select className="search-field" id="search-field" name="search">
                            <option value="tech">Tech</option>
                            <option value="track">Track</option>
                            <option value="avalability">Avalability</option>
                            <option value="experience">Experience</option>
                            <option value="position">Position</option>
                        </select>

                        <input className="search-field location" name="location" type="text" placeholder="Location"></input>
                    
                        
                        <button onClick={changeRoute} className="search-btn" type="button">Search</button>

                      
                  </div>
                  <h4>...raising the next generation of great developers</h4>
                 
              </form>
          </div>  
        </div>
    )
}

export default Searchpage
