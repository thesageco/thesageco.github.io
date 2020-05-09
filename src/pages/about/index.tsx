import React from 'react';
import './index.scss';
import Navbar from '../../components/navbar';
import Hamburger from '../../components/hamburger';
import Contact from '../../components/contact';
import ProcessCard from '../../components/process-card';
import { BannerType, BannerText } from '../../components/banner-text';

import who_we_are from '../../assets/about/who-we-are.svg';
import product_iteration from '../../assets/about/product_iteration.svg';
import emile from '../../assets/team/emile.jpg';
import aditya from '../../assets/team/aditya.jpeg';

export default function About() {

  return (
  <>
    <Navbar />
    <Hamburger />
    <div className="about container">
      <div className="who-we-are">
        {BannerText({
          type: BannerType.WhoWeAre
        })}
        <div className="who-we-are-img sub-container">
          <img src={who_we_are} alt="who-we-are"/>
        </div>
      </div>
      <p className="combined-experience">With a combined <span>six years of experience</span> building and launching products ranging from mobile apps to websites and software, the Sage Co team is composed of two University of Waterloo students in Computer Science, and Global Business and Digital Arts.</p>
      <div className="processes">
        {ProcessCard({
          icon: '',
          header: "We are experts in",
          subtext: <div>
                        <p>Front-end & Back-end development</p>
                        <p>Product Design (UX, UI, Research)</p>
                        <p>Online Marketing</p>
                        <p>Workflow Optimization</p>
                  </div>,
          image: product_iteration,
          image_alt: "ggwp",
          size: "large",
          shadow: "none",
        })}
      </div>
      <div className="the-team" id="the-team">
        {BannerText({
          type: BannerType.TheTeam
        })}
        <div className="pics">
          <figure>
            <img src={aditya} alt="aditya" />
            <figcaption>Aditya Arora</figcaption>
          </figure>
          <figure>
            <img src={emile} alt="emile" />
            <figcaption>Emile Patry</figcaption>
          </figure>
        </div>
      </div>
      <div className="companies">
        <p>...and have been trusted by some of the best.</p>
        <div className="logos">
        </div>
      </div>
      <div className="hr"></div>
      {BannerText({
        type: BannerType.GenZ
      })}
      <div>
        {Contact({})}
      </div>
    </div>
  </>)
}