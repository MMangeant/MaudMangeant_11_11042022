import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import './style/index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Error from './pages/Error';
import Fiche from './pages/Fiche';


const App = () => {
  return (
  <React.StrictMode>
      <Router>
        <div className='main'>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/apropos" element={<Apropos />} />
            <Route exact path="/logements/:id" element={<Fiche />} />
            <Route exact path="*" element={<Error />} />
          </Routes>

        </div>
        <Footer />
      </Router>
    </React.StrictMode>
  )
}

export default App;



