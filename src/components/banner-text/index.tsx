import React from 'react';
import './index.scss';

enum BannerType {
  GenZ = 1,
  GoodCompany = 2,
  OurProcess = 3,
  WhoWeAre = 4,
  TheTeam = 5,
  LetsChat = 6,
  TalkSoon,
  Lost,
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
    case BannerType.WhoWeAre: 
      className="who-we-are";
      header= "Who we are";
      text= <div className={className}><p>We’re one of the few design agencies in the world who will take your product from a napkin sketch to launch.</p></div>;
      break;
    case BannerType.TheTeam: 
      className="team";
      header= "The Team";
      text= <div className={className}><p>We have worked together on a multitude of projects.</p></div>;
      break;
    case BannerType.LetsChat: 
      className="chat";
      header= "Let's chat";
      text= <div className={className}><p>Can we help? We’re always looking for new and exciting projects to work on!</p></div>;
      break;
    case BannerType.TalkSoon: 
      className="talk-soon";
      header= "Talk Soon";
      text= <div className={className}><p>Thanks for expressing your interest in working with us! We’ll be back in touch within the next day.</p></div>;
      break;
    case BannerType.Lost: 
      className="lost";
      header= "Hmm, seems like you’re lost";
      text= <div className={className}><p>This page may have been deleted, or simply hasn’t been created yet!</p></div>;
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