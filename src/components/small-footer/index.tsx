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
            <Link to={process.env.PUBLIC_URL + "/"}>
              <img src={sage_full} alt="sage icon"/>
            </Link>
          </div>
          <div className="right">
            <Link to={process.env.PUBLIC_URL + "/work"}>Our Work</Link>
            <Link to={process.env.PUBLIC_URL + "/about"}>About Us</Link>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thesageco/">Linkedin</a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:hello@thesage.co?Subject=Saying Hello!">Email</a>
            <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/emilepatry">Book a Meeting</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

