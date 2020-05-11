import React, { useState } from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import history from '../../history';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import Hamburger from '../hamburger'

import {LanguageSetStore} from '../../App'

export default {
  title: 'Hamburger',
  component: Hamburger,
};

export const Default = () =>  {
  const [visible, setVisible] = useState(false);
  return (
    <Router history={history}>
      <LanguageSetStore.Provider value={action('LangChanged')}>
        <Hamburger visible={visible} setVisible={(val) => setVisible(val)}/>
      </LanguageSetStore.Provider>
    </Router>
  );
}
