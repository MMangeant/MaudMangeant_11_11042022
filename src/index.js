
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Error from './pages/Error';
import Fiche from './pages/Fiche';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Router>
    <div className='main'>
    <Header />
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/apropos">
          <Apropos />
        </Route>
        <Route exact path="/logements/:id">
          <Fiche />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>

    </div>
    <Footer />
    </Router>
  </React.StrictMode>
);


