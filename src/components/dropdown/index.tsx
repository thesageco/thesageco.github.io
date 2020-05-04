import React, { useState } from 'react';
import './index.scss';
import {Link} from 'react-router-dom';
import down from '../../assets/icons/down-arrow-2.svg'

interface DropDownHeader {
  header: String;
  children: string[];
  link: string[];
}
interface DropdownProp {
  className?: string;
  options: DropDownHeader[];
}

export default function Dropdown(props: DropdownProp) {
  const [open, setOpen] = useState(false);
  
  function toggleOpen() {
    setOpen(!open);
  }
  
  
  let dropdown_contents = props.options.map((heading, i) => {
    let children = heading.children.map((child, j) => {
      if (heading.link[j] !== ""){
        return <li key={String(i) + String(j)}>
          <Link to={heading.link[j]}>{child}</Link>
        </li>;
      }
      return <li key={String(i) + String(j)}>{child}</li>;
    })
    children.unshift(<p className="header" key={i}>{heading.header}</p>);
    return (children);
  })
  
  return (
    <div className={`dd-wrapper ${props.className}`}>
      <div className="dd-header">
        <div className="dd-header-title" onClick={toggleOpen}>
          <span>About Us</span>
          <img alt="down arrow" src={down} className={`${open?"up":"down"}`}/>
        </div>
        
      </div>
      <ul className={`dd-list ${open?"show":"hide"}`}>
        {dropdown_contents}
      </ul>
    </div>
  );

};
