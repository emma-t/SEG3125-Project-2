import './App.css';
import PageNavbar from './components/PageNavbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Items from './pages/Items';
import About from './pages/About';
import Location from './pages/Location';
import FAQReviews from './pages/FAQReviews';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>

      <div>
      <PageNavbar />

      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/donate' element = {<Donate />} />
        <Route path='/items' element = {<Items />} />
        <Route path='/about' element = {<About />} />
        <Route path='/location' element = {<Location />} />
        <Route path='/faqreviews' element = {<FAQReviews />} />
        <Route path='/contact' element = {<Contact />} />
        {/* <Route path='/Services' element = {<Services />} /> */}
        {/* <Route path='/Aboutus' element = {<Aboutus />} /> */}

      </Routes>


      </div>
      

    </Router>
  );
}

export default App;
