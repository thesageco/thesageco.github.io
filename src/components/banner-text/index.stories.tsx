import React from 'react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import {BannerType, BannerText} from '../banner-text'

export default {
  title: 'BannerText',
  component: BannerText,
};

export const Normal = () =>  {
  return <div className="banner-texts">
    {BannerText({
      type: BannerType.GenZ
    })}
  </div>
}
