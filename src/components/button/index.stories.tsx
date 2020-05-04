import React from 'react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import {Button, ButtonType} from '../button'

export default {
  title: 'Button',
  component: Button,
};

export const White = () =>  {
  return (
      Button({
        text: "Events",
        href: "events",
        type: ButtonType.White
      })
  );
}
// 
// export const Gold = () =>  {
//   return (
//       Button({
//         text: "Events",
//         href: "events",
//         type: ButtonType.Gold
//       })
//   );
// }