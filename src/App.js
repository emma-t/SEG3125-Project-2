import './App.css';
import PageNavbar from './components/PageNavbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Info from './pages/Info';
import Confirm from './pages/Confirm';
import Items from './pages/Items';
import About from './pages/About';
import FAQReviews from './pages/FAQReviews';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/seg3125-project-2">
      <div>
        <PageNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/info" element={<Info />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/items" element={<Items />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq-reviews" element={<FAQReviews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
