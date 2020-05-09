import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Navbar from './components/navbar';
import Hamburger from './components/hamburger';
import Footer from './components/small-footer';
import ScrollToTop from './components/scroll-to-top';

import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import FourOhFour from './pages/404';

const LanguageSetStore = React.createContext({});
const LanguageStore = React.createContext({});

export default function App() {
  return (
    <div className="app">
      <Router basename="/">
        <ScrollToTop />
        <Switch>
          <Route path="/project">
            {Project()}
          </Route>
          <Route path="/about">
            {About()}
          </Route>
          <Route exact path="/">
            {Home()}
          </Route>
          <Route path="/">
            {FourOhFour()}
          </Route>
        </Switch>
        {Footer()}
      </Router>
    </div>
  );
}

export {LanguageSetStore, LanguageStore, App};
