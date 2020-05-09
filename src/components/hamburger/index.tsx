import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
// import Dropdown from '../dropdown';
import { slide as Menu } from 'react-burger-menu'


function Hamburger() {  
  return (
    <div className="burger">
      <Menu width={ '60%' }>
        <div className="large-height">
          <div className="top"> 
            <Link className="menu-item" to="/work">Our Work</Link>
            <Link className="menu-item" to="/about">About Us</Link>
          </div>
          {
            /*
            Dropdown({
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
            })*/
          }
          <div className="bottom">
            <Link className="menu-item" to="/project">Start a Project</Link>
          </div>
        </div>
      </Menu>
    </div>
  );

};

export default Hamburger;