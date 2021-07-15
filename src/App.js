import Navbar from './components/Navbar';
import Searchpage from './components/Searchpage';
import About from './components/About';
import Listing from './components/Listing';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router> 
      <div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/searchpage" component={Searchpage} />
        </Switch>
      </div>
    </Router>
    {/* <div>
      <Navbar />
      
      <Searchpage />
      <About />
    </div>

    <div>
      <Listing />
    </div> */}
    </>
  );
}

export default App;
