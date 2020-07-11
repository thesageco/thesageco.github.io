import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
// import Dropdown from '../dropdown';
import { slide as Menu } from 'react-burger-menu'

interface HamburgerProp {
  visible: boolean;
  setVisible: (val: boolean) => void;
}

function Hamburger({
  visible,
  setVisible,
}: HamburgerProp) {  
  return (
    <div className="burger">
      <div 
        className={`burger-button ${visible ? "invisible" : "visible"}`} 
        style={{fontSize: "2rem"}}
        onClick={()=>setVisible(true)}
      >
        <i className="far fa-bars icon-4x"></i>
      </div>
      <div 
        className={`burger-cross ${visible ? "visible" : "invisible"}`} 
        style={{fontSize: "2rem"}}
        onClick={()=>setVisible(false)}
      >
          <i className="far fa-times icon-4x"></i>
      </div>
      <div className={`large-height ${visible ? "visible" : "invisible"}`}>
        <div className="links">
          <Link className="menu-item" to={process.env.PUBLIC_URL + "/work"} onClick={()=>setVisible(false)}>Our Work</Link>
          <Link className="menu-item" to={process.env.PUBLIC_URL + "/about"} onClick={()=>setVisible(false)}>About Us</Link>
          <Link className="menu-item" to={process.env.PUBLIC_URL + "/project"} onClick={()=>setVisible(false)}>Start a Project</Link>
        </div>
      </div>
    </div>
  );

};

export default Hamburger;