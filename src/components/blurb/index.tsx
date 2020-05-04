import React from 'react';
import './index.scss';

interface BlurbProp {
  name: String;
  text: String; 
}
export default function Blurb(props: BlurbProp) {
  
  return (
    <div className="blurb">
      <p>{props.name}</p>
      <p>{props.text}</p>
    </div>
  );

};
