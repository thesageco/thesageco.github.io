import React from 'react';
import './index.scss';
import { BannerType, BannerText } from '../../components/banner-text';

import lost from '../../assets/404/lost.svg'

export default function FourOhFour() {
  return (
    <>
      <div className="fourohfour">
        {BannerText({
          type: BannerType.Lost
        })}
        <img src={lost} alt="lost"/>
      </div>
    </>
)
}