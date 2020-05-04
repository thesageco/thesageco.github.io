import React from 'react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import lightbulb from '../../assets/icons/lightbulb.svg';
import white from '../../assets/process/white.png';
import ProcessCard from '../process-card';

export default {
  title: 'ProcessCard',
  component: ProcessCard,
};

export const Normal = () =>  {
  return <div className="banner-texts">
    {ProcessCard({
      icon: lightbulb,
      header: "Bring us your idea",
      subtext: <p><span className="underline">Set up a 30 minute chat</span> with us to discuss what you’d like to do. We will offer professional advice and provide a ballparked proposal - no project is too big or small for us!</p>,
      image: white,
      image_alt: "ggwp",
    })}
  </div>
}
