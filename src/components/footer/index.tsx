import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

export default function Footer() {
  return (
    <div className="footer">
      <footer className="footer-content">
        <div className="align-as-col">
          <div className="left">
            <Link to="/about">Our Team</Link>
            <Link to="/terms">Terms and Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          <div className="right">
            <a target="blank" href="mailto:hello@thesage.co?Subject=Saying Hello!">Email</a>
            <a target="blank" href="https://www.linkedin.com/company/thesageco/">Linkedin</a>
            <a target="blank" href="/">Call Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

