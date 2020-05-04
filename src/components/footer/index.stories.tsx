import React from 'react';
import { action } from '@storybook/addon-actions';
import {Router} from "react-router-dom";
import history from '../../history';
import '@storybook/addon-console';
import Footer from '../footer'

export default {
  title: 'Footer',
  component: Footer,
};

export const Default = () =>  {
  return (
      <Router history={history}>
        <Footer />
      </Router>
  );
}
