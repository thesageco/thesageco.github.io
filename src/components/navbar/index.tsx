import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {Button, ButtonType} from '../button';
import logo from '../../assets/logo/sageco.svg';
import right_arrow from '../../assets/icons/right-arrow.svg';
import sage_icon from '../../assets/logo/sage-icon.svg';

import './index.scss';
// import Dropdown from '../dropdown';

interface NavbarProps {
  type?: number;
  hidden: boolean;
}

function Navbar(props: NavbarProps) {
  const {type = 1, hidden=false} = props;
  const [active, setActive] = useState(0);
  
  const nav:any = {
    "/work": 0,
    "/about": 1,
  }
  
  
  if (hidden) {
    return <></>
  }
  if(active !== nav[window.location.pathname]){
    setActive(nav[window.location.pathname])
  }
  if(type !== 1){
    return (
      <div className="navbar-back">
        <nav className="container">
          <div className="left" style={{flex: 1}}>
            {Button({type: ButtonType.White, href: process.env.PUBLIC_URL + "/", text:<span><img src={right_arrow} alt="back arrow"/>Return</span>})}
          </div>
          <img className="logo" src={sage_icon} alt="sage icon"/>
        </nav>
      </div>
    )
    
  }
  
  return (
    <div className="navbar">
      <nav className="container">
        <div className="left">
          <Link to={process.env.PUBLIC_URL + "/"} onClick={()=>setActive(0)}>
            <img src={logo} alt="sage logo"/>
          </Link>
          <Link className={`hide-on-mobile ${active === 0?"active":""}` } to={process.env.PUBLIC_URL + "/work"} onClick={()=>setActive(0)}>Our Work</Link>
          <Link className={`hide-on-mobile ${active === 1?"active":""}` } to={process.env.PUBLIC_URL + "/about"} onClick={()=>setActive(1)}>About Us</Link>
          {/*
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
            */
          }
        </div>
        <div className="right">
          <Link className={active === 2?"active":""} to={process.env.PUBLIC_URL + "/project"} onClick={()=>setActive(2)}>Start a Project</Link>
        </div>
      </nav>
    </div>
  );

};

export default Navbar;

