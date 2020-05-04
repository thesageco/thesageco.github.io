import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

enum ButtonType {
  White="white"
}

interface ButtonProp {
  text: String;
  href: string;
  type: ButtonType;
}

export default function Button(props: ButtonProp) {
  return (
    <Link to={props.href} className={`button ${props.type}`}>
      {props.text}
    </Link>
  );

};

export {ButtonType, Button};