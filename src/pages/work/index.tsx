import React from 'react';
import './index.scss';
import Contact from '../../components/contact';
import Blurb from '../../components/blurb';
import ProcessCard from '../../components/process-card';
import {Button, ButtonType} from '../../components/button';
import { BannerType, BannerText } from '../../components/banner-text';


export default function Work() {

  return (
  <>
    <div className="work">
      {BannerText({
        type: BannerType.PixelPushers
      })}
    </div>
  </>)
}