import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer.js'
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
      <Footer/>
    </div>
    <div>
      <Listing />
    </div>
    </>
  );
}

export default App;
