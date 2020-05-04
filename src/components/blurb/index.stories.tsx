import React from 'react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import Blurb from '../blurb'

export default {
  title: 'Blurb',
  component: Blurb,
};

export const Normal = () =>  {
  return <div className="blurbs">
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
}
