import './App.css';
import PageNavbar from './components/PageNavbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Info from './pages/Info.js';
import Confirm from './pages/Confirm.js';
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
        <Route path='/info' element = {<Info />} />
        <Route path='/confirm' element = {<Confirm />} />
        <Route path='/items' element = {<Items />} />
        <Route path='/about' element = {<About />} />
        <Route path='/location' element = {<Location />} />
        <Route path='/faq-reviews' element = {<FAQReviews />} />
        <Route path='/contact' element = {<Contact />} />
        {/* <Route path='/Services' element = {<Services />} /> */}
        {/* <Route path='/Aboutus' element = {<Aboutus />} /> */}

      </Routes>


      </div>
      

    </Router>
  );
}

export default App;
