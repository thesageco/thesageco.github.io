import React from 'react';
import './index.scss';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
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

import idea from '../../assets/process/idea.png';
import research from '../../assets/process/research.png';
import design from '../../assets/process/design.png';
import building from '../../assets/process/building.png';
import peace2 from '../../assets/process/peace.png';

export default function Home() {

  return (
  <>
    <div className="home">
      {BannerText({
        type: BannerType.GenZ
      })}
      <div>
        {Contact({})}
      </div>
      <div className="blurbs container">
        {Blurb({
          name: "Antonio Llaca",
          text: "“I was truly happy with the work that the team at Sage.co did to set up my website. [They] were always available to answer my questions and quick to offer and implement solutions for me. It was really a pleasure working with them”",
        })}
        {Blurb({
          name: "Lumen Graphics",
          text: "“Sage Co has quick and personal customer service! They were able to create the perfect website for my company with attention to design and functionality.”",
        })}
        {Blurb({
          name: "Ruslan Nikolaev",
          text: `“The Sage team quickly delivered on the website when we needed it the most and was great at communicating throughout the development process.”`,
        })}
      </div>
      <div className="mobile-blurbs container">
        <Carousel
          slidesPerPage={1.2}
          centered
          infinite
          stopAutoPlayOnHover
          autoPlay={4000}
          animationSpeed={1000}
        >
          {Blurb({
            key: 0,
            name: "Ruslan Nikolaev",
            text: `“The Sage team quickly delivered on the website when we needed it the most and was great at communicating throughout the development process.”`,
          })}
          {Blurb({
            key: 1,
            name: "Antonio Llaca",
            text: "“I was truly happy with the work that the team at Sage.co did to set up my website. [They] were always available to answer my questions and quick to offer and implement solutions for me. It was really a pleasure working with them”",
          })}
          {Blurb({
            key: 2,
            name: "Lumen Graphics",
            text: "“Sage Co has quick and personal customer service! They were able to create the perfect website for my company with attention to design and functionality.”",
          })}
        </Carousel>
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
      <div className="processes container">
        {ProcessCard({
          icon: lightbulb,
          header: "Bring us your idea",
          subtext: <p><span className="underline">Set up a 30 minute chat</span> with us to discuss what you’d like to do. We will offer professional advice and provide a ballparked proposal - no project is too big or small for us!</p>,
          image: idea,
          image_alt: "ggwp",
        })}
        {ProcessCard({
          icon: telescope,
          header: "We'll do the research",
          subtext: <p>To build a skyscraper you must start with the bedrock. We believe in familiarizing ourselves as much as we can with your business needs in order to ensure the end result is the best we can provide.</p>,
          image: research,
          image_alt: "telsecope",
          direction: "left",
        })}
        {ProcessCard({
          icon: palette,
          header: "Design is Everything",
          subtext: <p>Looks is an important factor to keep in mind when making your new website. Other than creating beautiful UI’s we also offer services in branding, if that what your project calls for.</p>,
          image: design,
          image_alt: "palette",
        })}
        {ProcessCard({
          icon: laptop,
          header: "Let's get bulding",
          subtext: <p>Once we’ve all come to agreements on the design of your new project, we utilize our own in-house tools to code and launch your website. Don’t forget to pick a good domain name!</p>,
          image: building,
          image_alt: "laptop",
          direction: "left",
        })}
        {ProcessCard({
          icon: peace,
          header: "Your peace of mind",
          subtext: <p>Once all is well and finished, we’re always here to answer any of your questions. We’re here for you, 24/7.</p>,
          image: peace2,
          image_alt: "peace",
        })}
      </div>
      {BannerText({
        type: BannerType.GenZ
      })}
      <div className="contact-form">
        {Contact({})}
      </div>
    </div>
  </>)
}