import React, {useState} from 'react';
import './index.scss';
import Navbar from '../../components/navbar';
import Contact from '../../components/contact';
import { BannerType, BannerText } from '../../components/banner-text';

import lost from '../../assets/404/lost.svg'

export default function FourOhFour() {
  return (
    <>
      {Navbar({type: 0})}
      <div className="fourohfour">
        {BannerText({
          type: BannerType.Lost
        })}
        <img src={lost} alt="lost"/>
      </div>
    </>
)
}