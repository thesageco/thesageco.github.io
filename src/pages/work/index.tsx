import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import './index.scss';
import Contact from '../../components/contact';
import { BannerType, BannerText } from '../../components/banner-text';
import OurProject from '../../components/our-project';

import antonio from "../../assets/work/antoniollaca.svg";
import lxm from "../../assets/work/lxm.svg";
import allure from "../../assets/work/allure.svg";



export default function Work() {
  useEffect(() => {
    ReactGA.pageview('/work');  
  }, [])

  return (
    <div className="work container">
      {BannerText({
        type: BannerType.PixelPushers
      })}
      <div className="our-projects">
        <OurProject 
          imgString={lxm} 
          href="https://lxmlaw.ca/" 
          buttonText="View Project Website"
        />
        <OurProject 
          imgString={antonio} 
          href="https://antoniollaca.com/" 
          buttonText="View Project Website"
        />
        <OurProject 
          imgString={allure} 
          href="http://alluresystems.com//" 
          buttonText="View Project Website"
        />
      </div>
      <div className="hr"></div>
      {BannerText({
        type: BannerType.GenZ
      })}
      <div className="contact-on-work">
        {Contact({})}
      </div>
    </div>
  )
}