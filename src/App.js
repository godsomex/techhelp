import Navbar from './components/Navbar';
import Searchpage from './components/Searchpage';
import About from './components/About';
import Listing from './components/Listing';
import Homepage from './components/Homepage';
import Searchresult from './components/Searchresult';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router> 
      <div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/searchpage" component={Searchpage} />
          <Route exact path="/" component={Homepage} />
          <Route path="/Searchresult" component={Searchresult} />
          <Route path="/Listing" component={Listing} />

        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
