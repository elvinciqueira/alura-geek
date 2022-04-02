import React from 'react';

import { Header } from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Basic = (args: any) => <Header {...args} />;
