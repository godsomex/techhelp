import React from 'react';
import './Searchpage.css';
import Searchresult from './components/Searchresult.js';
import { BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';



const Searchpage = () => {
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
                    
                        <Link exact to='Searchresult' className="search-btn" type="button">
                            Search
                        </Link>
                        
                  </div>
                  <h4>...raising the next generation of great developers</h4>
                 
              </form>
          </div>  
        </div>
    )
}

export default Searchpage
