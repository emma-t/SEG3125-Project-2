import './App.css';
import PageNavbar from './components/PageNavbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>

      <div>
      <PageNavbar />

      <Routes>
        <Route path='/' element = {<Home />} />
        {/* <Route path='/Services' element = {<Services />} /> */}
        {/* <Route path='/Aboutus' element = {<Aboutus />} /> */}

      </Routes>


      </div>
      

    </Router>
  );
}

export default App;
