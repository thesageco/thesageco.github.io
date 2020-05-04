import React, { useReducer, useEffect, useState } from 'react';
import './App.scss';

import {
  Router,
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

function languageReducer(
  state: {lang: string}, 
  action: {type: string, lang: string}
) {
  switch (action.type) {
    case 'update':
      return {lang: action.lang};
    default:
      return {lang: action.lang}
  }
}

history.listen((location, action) => {
    window.scrollTo(0, 0)
})

export default function App() {
  let [state, dispatch] = useReducer(languageReducer, {lang: 'EN'});

  return (
    <div className="app">
      <Router history={history}>
        <LanguageStore.Provider value={state.lang}>
          <LanguageSetStore.Provider value={dispatch}>
            <Navbar />
            <Hamburger />
          </LanguageSetStore.Provider>
              <Switch>
                <Route path="/">
                  {Home({lang: state.lang})}
                </Route>
              </Switch>
          {Footer()}
        </LanguageStore.Provider>
      </Router>
    </div>
  );
}

export {LanguageSetStore, LanguageStore, App};
