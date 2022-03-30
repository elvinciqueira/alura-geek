import React from 'react';

// import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Box } from './Box';
import { Text } from '../Text';

export default {
  title: 'Building Blocks/Box',
  component: Box,
  parameters: {
    // docs: {
    //   page: () => (
    //     <>
    //       <Title />
    //       <Description>Building block of layouts. Creates a box-model context</Description>
    //       <Props of={Box} />
    //     </>
    //   ),
    // },
  },
};

export const Basic = (args: any) => <Box {...args} />;

export const Primary = () => (
  <Box bg="primaryColor" p={'spacingSizeSm'} mb={'spacingSizeXs'}>
    <Text color="neutralWhite">This is a box</Text>
  </Box>
);

export const Sizing = () => (
  <Box bg="black">
    <Text color="neutralWhite">This is a box</Text>
  </Box>
);
