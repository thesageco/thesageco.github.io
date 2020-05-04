import React from 'react';
import './index.scss';

enum BannerType {
  GenZ = 1,
  GoodCompany = 2,
  OurProcess = 3,
}

interface BannerTextProp {
  type: BannerType
}
export default function BannerText(props: BannerTextProp) {
  let header="", text=<></>, className = "";
  switch(props.type){
    case BannerType.GenZ: 
      className="generationZ";
      header= "Generation Z is in the house";
      text= <div className={className}><p>Build your next website or app with our team of student <span id="i1">designers</span>, <span id="i2">developers</span>, and <span id="i3">marketing&nbsp;specialists</span>.</p></div>;
      break;
    case BannerType.GoodCompany: 
      className="good-company";
      header= "You're in good company";
      text= <div className={className}><p>Our team has a combined eight years of experience building websites, apps, and software for some of the world’s best companies.</p></div>;
      break;
    case BannerType.OurProcess: 
      className="our-process";
      header= "Our Process";
      text= <div className={className}><p>We’re avid believers in design-thinking. That means applying a time-tested iterative process to creating digital solutions that work.</p></div>;
      break;
  }
  
  return (
    <div className={`banner-text ${className}`}>
      <p className="header">{header}</p>
      {text}
    </div>
  );

};

export {BannerType, BannerText};