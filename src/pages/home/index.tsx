import React from 'react';
import './index.scss';
import Contact from '../../components/contact';
import Blurb from '../../components/blurb';
import ProcessCard from '../../components/process-card';
import {Button, ButtonType} from '../../components/button';
import { BannerType, BannerText } from '../../components/banner-text';
import lightbulb from '../../assets/icons/lightbulb.svg';
import telescope from '../../assets/icons/telescope.svg';
import palette from '../../assets/icons/palette.svg';
import laptop from '../../assets/icons/laptop.svg';
import peace from '../../assets/icons/peace.svg';
import white from '../../assets/process/white.png';

export default function Home() {

  return (
  <div className="home">
    {BannerText({
      type: BannerType.GenZ
    })}
    <div>
      {Contact()}
      <p className="apply">Are you a student looking for work? <a href="#!">Apply Here</a></p>
    </div>
    <div className="blurbs">
      {Blurb({
        name: "Antonio Llaca",
        text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
      })}
      {Blurb({
        name: "Lumen Graphics",
        text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
      })}
      {Blurb({
        name: "Ruslan Nikolaev",
        text: `“The Sage team quickly delivered on the website when we needed it the most and was great at communicating throughout the development process.”`,
      })}
    </div>
    {BannerText({
      type: BannerType.GoodCompany
    })}
    {Button({
      text: "See our work",
      href: "work",
      type: ButtonType.White
    })}
    <hr/>
    {BannerText({
      type: BannerType.OurProcess
    })}
    <div className="process">
      {ProcessCard({
        icon: lightbulb,
        header: "Bring us your idea",
        subtext: <p><span className="underline">Set up a 30 minute chat</span> with us to discuss what you’d like to do. We will offer professional advice and provide a ballparked proposal - no project is too big or small for us!</p>,
        image: white,
        image_alt: "ggwp",
      })}
      {ProcessCard({
        icon: telescope,
        header: "We'll do the research",
        subtext: <p>To build a skyscraper you must start with the bedrock. We believe in familiarizing ourselves as much as we can with your business needs in order to ensure the end result is the best we can provide.</p>,
        image: white,
        image_alt: "telsecope",
        direction: "left",
      })}
      {ProcessCard({
        icon: palette,
        header: "Design is Everything",
        subtext: <p>Looks is an important factor to keep in mind when making your new website. Other than creating beautiful UI’s we also offer services in branding, if that what your project calls for.</p>,
        image: white,
        image_alt: "palette",
      })}
      {ProcessCard({
        icon: laptop,
        header: "Let's get bulding",
        subtext: <p>Once we’ve all come to agreements on the design of your new project, we utilize our own in-house tools to code and launch your website. Don’t forget to pick a good domain name!</p>,
        image: white,
        image_alt: "laptop",
        direction: "left",
      })}
      {ProcessCard({
        icon: peace,
        header: "Your peace of mind",
        subtext: <p>Once all is well and finished, we’re always here to answer any of your questions. We’re here for you, 24/7.</p>,
        image: white,
        image_alt: "peace",
      })}
    </div>
    {BannerText({
      type: BannerType.GenZ
    })}
    <div>
      {Contact()}
    </div>
  </div>)
}