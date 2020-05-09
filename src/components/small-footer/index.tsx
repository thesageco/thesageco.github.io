import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

import sage_full from '../../assets/logo/sage-full.svg';

export default function SmallFooter() {
  return (
    <div className="footer">
      <footer className="footer-content">
        
        <div className="container">
          <div className="left">
            <img src={sage_full} alt="sage icon"/>
          </div>
          <div className="right">
            <Link to="/work">Our Work</Link>
            <Link to="/terms">About Us</Link>
            <a target="blank" href="https://www.linkedin.com/company/thesageco/">Linkedin</a>
            <a target="blank" href="mailto:hello@thesage.co?Subject=Saying Hello!">Email</a>
            <a target="blank" href="/">Book a Meeting</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

