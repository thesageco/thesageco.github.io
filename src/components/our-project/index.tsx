import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

import right_arrow from '../../assets/icons/right-arrow.svg';

interface OurProjectProp {
  imgString: string;
  href: string;
  buttonText: string;
}

export default function OurProject({
  imgString, 
  href,
  buttonText,
}: OurProjectProp) {
  return (
    <div className="our-project">
      <img src={imgString} />
      <a rel="noopener noreferrer" target="blank" href={href}>
        <div className="button"><span>{buttonText}<img src={right_arrow} alt="submit arrow"/></span></div>
      </a>
    </div>
  );
};