import React from 'react';
import './App.scss';

import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

import history from './history';

import Navbar from './components/navbar';
import Hamburger from './components/hamburger';
import Footer from './components/footer';

import Home from './pages/home';

const LanguageSetStore = React.createContext({});
const LanguageStore = React.createContext({});

export default function App() {
  
  return (
    <div className="app">
      <HashRouter basename="/">
            <Navbar />
            <Hamburger />
              <Switch>
                <Route path="/">
                  {Home()}
                </Route>
              </Switch>
          {Footer()}
      </HashRouter>
    </div>
  );
}

export {LanguageSetStore, LanguageStore, App};
