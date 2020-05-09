import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

enum ButtonType {
  White="white"
}

interface ButtonProp {
  text: JSX.Element | string;
  href: string;
  type: string;
}

export default function Button(props: ButtonProp) {
  return (
    <Link to={props.href} className={`button ${props.type}`}>
      {props.text}
    </Link>
  );

};

export {ButtonType, Button};