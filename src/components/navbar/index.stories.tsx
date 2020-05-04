import React from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import history from '../../history';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import Navbar from '../navbar'

import {LanguageSetStore} from '../../App'

export default {
  title: 'Navbar',
  component: Navbar,
};

export const Default = () =>  {
  return (
    <Router history={history}>
      <LanguageSetStore.Provider value={action('LangChanged')}>
          <Navbar />
      </LanguageSetStore.Provider>
    </Router>
  );
}
