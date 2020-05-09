import React from 'react';
import { action } from '@storybook/addon-actions';
import {Router} from "react-router-dom";
import history from '../../history';
import '@storybook/addon-console';
import SmallFooter from '../small-footer'

export default {
  title: 'SmallFooter',
  component: SmallFooter,
};

export const Default = () =>  {
  return (
      <Router history={history}>
        <SmallFooter />
      </Router>
  );
}
