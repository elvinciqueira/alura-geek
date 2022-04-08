import React from 'react';

import { Footer } from './Footer';

export default {
  title: 'Contents/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Basic = (args: any) => <Footer {...args} />;
