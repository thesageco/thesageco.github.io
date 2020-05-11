import React, {useState} from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Footer from './components/small-footer';
import ScrollToTop from './components/scroll-to-top';
import Hamburger from './components/hamburger';
import Navbar from './components/navbar';


import Home from './pages/home';
import About from './pages/about';
import Work from './pages/work';
import Project from './pages/project';
import FourOhFour from './pages/404';

const LanguageSetStore = React.createContext({});
const LanguageStore = React.createContext({});

export default function App() {
  const [visible, setVisible] = useState<boolean>(false);
  
  return (
    <div className="app">
      <Router basename="/">
        <ScrollToTop />
        <Switch>
          <Route path="/project">
            <Navbar hidden={false} type={0}/>
            <Project />
          </Route>
          <Route path="/about">
            <Navbar hidden={visible}/>
            <Hamburger visible={visible} setVisible={(val) => setVisible(val)}/>
            {!visible && <About />}
          </Route>
          <Route path="/work">
            <Navbar hidden={visible}/>
            <Hamburger visible={visible} setVisible={(val) => setVisible(val)}/>
            {!visible && <Work />}
          </Route>
          <Route exact path="/">
            <Navbar hidden={visible}/>
            <Hamburger visible={visible} setVisible={(val) => setVisible(val)}/>
            {!visible && <Home />}
          </Route>
          <Route path="/">
            <Navbar hidden={false} type={0}/>
            <FourOhFour />
          </Route>
        </Switch>
        {Footer()}
      </Router>
    </div>
  );
}

export {LanguageSetStore, LanguageStore, App};
