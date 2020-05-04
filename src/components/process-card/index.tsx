import React, {ReactNode} from 'react';
import './index.scss';

interface ProcessCardProp {
  header: String;
  subtext: ReactNode;
  icon: string;
  image: string;
  image_alt: string;
  direction?: 'left' | 'right'
}
export default function ProcessCard(props: ProcessCardProp) {
  return (
    <div className={`process-card ${props.direction ? "right" : "left"}`}>
      <div className="process-text">
        <img src={props.icon} alt={props.image_alt}/>
        <p className="header">{props.header}</p>
        <div className="subtext">{props.subtext}</div>
      </div>
      <div className="process-img">
        <img src={props.image} alt={props.image_alt}/>
      </div>
    </div>
  );

};

