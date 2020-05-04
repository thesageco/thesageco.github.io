import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/sageco.svg';
import './index.scss';
import Dropdown from '../dropdown';

function Navbar() {
  const [active, setActive] = useState(0);
  
  const nav:any = {
    "/work": 0,
  }
  
  if(active !== nav[window.location.pathname]){
    setActive(nav[window.location.pathname])
  }
  
  return (
    <div className="navbar">
      <nav className="container">
        <div className="left">
          <Link to="/" onClick={()=>setActive(0)}>
            <img src={logo} alt="sage logo"/>
          </Link>
          <Link className={`hide-on-mobile ${active === 0?"active":""}` } to="/work" onClick={()=>setActive(0)}>Our Work</Link>
          {
            Dropdown({
                className: "hide-on-mobile",
                options: 
                [{
                  header: "Our Process",
                  children: ["How we work", "FAQs"],
                  link: ["1", "2"],
                }, {
                  header: "Information",
                  children: ["Our Team", "Manifesto"],
                  link: ["1", "2"],
                }]
            })
          }
        </div>
        <div className="right">
          <Link className={active === 1?"active":""} to="/about" onClick={()=>setActive(1)}>Start a Project</Link>
        </div>
      </nav>
    </div>
  );

};

export default Navbar;

