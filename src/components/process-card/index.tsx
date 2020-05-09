import React, {ReactNode} from 'react';
import './index.scss';

interface ProcessCardProp {
  header: String;
  subtext: ReactNode;
  icon?: string;
  image: string;
  image_alt: string;
  size?: 'normal' | 'large';
  shadow?: 'normal' | 'none';
  direction?: 'left' | 'right';
}
export default function ProcessCard(props: ProcessCardProp) {
  const {size = 'normal', shadow = 'normal'} = props;
  return (
    <div className={`process-card ${props.direction ? "right" : "left"}`}>
      <div className="process-text">
        {props.icon ? <img src={props.icon} alt={props.image_alt}/> : <></>}
        <p className="header">{props.header}</p>
        <div className="subtext">{props.subtext}</div>
      </div>
      <div className={`process-img ${size}`}>
        <img className={shadow} src={props.image} alt={props.image_alt}/>
      </div>
    </div>
  );

};

