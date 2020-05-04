import React from 'react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import Contact from '../contact'

export default {
  title: 'Contact',
  component: Contact,
};

export const Normal = () =>  {
  return Contact()
}
