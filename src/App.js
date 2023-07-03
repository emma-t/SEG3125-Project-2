import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Info from './pages/Info';
import Confirm from './pages/Confirm';
import Items from './pages/Items';
import About from './pages/About';
import FAQReviews from './pages/FAQReviews';
import Contact from './pages/Contact';
import PageNavbar from './components/PageNavbar';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <div>
        <PageNavbar />
        <Routes>
          <Route path="/seg3125-project-2/" element={<Home />} />
          <Route path="/seg3125-project-2/donate" element={<Donate />} />
          <Route path="/seg3125-project-2/info" element={<Info />} />
          <Route path="/seg3125-project-2/confirm" element={<Confirm />} />
          <Route path="/seg3125-project-2/items" element={<Items />} />
          <Route path="/seg3125-project-2/about" element={<About />} />
          <Route path="/seg3125-project-2/faq-reviews" element={<FAQReviews />} />
          <Route path="/seg3125-project-2/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
