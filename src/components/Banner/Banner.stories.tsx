import React from 'react';

import { Banner } from './Banner';

export default {
  title: 'Contents/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Basic = (args: any) => <Banner {...args} />;
