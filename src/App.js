import Navbar from './components/Navbar';
import Searchpage from './components/Searchpage';
import About from './components/About';
import Listing from './components/Listing';

function App() {
  return (
    <>
    <div>
      <Navbar />
      
      <Searchpage />
      <About />
    </div>

    <div>
      <Listing />
    </div>
    </>
  );
}

export default App;
