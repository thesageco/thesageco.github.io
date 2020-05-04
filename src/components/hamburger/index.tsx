import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import Dropdown from '../dropdown';
import { slide as Menu } from 'react-burger-menu'

import logo from '../../assets/logo/sageco.svg';


function Hamburger() {  
  return (
    <div className="burger">
      <Menu width={ '60%' }>
        <Link className="menu-item" to="/about">Our Work</Link>
        {
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
          })
        }
      </Menu>
    </div>
  );

};

export default Hamburger;