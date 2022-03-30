import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Flex } from './Flex';
import { Box, Text } from '../';

export default {
  title: 'Building Blocks/Flex',
  component: Flex,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            Flex component helps you create flexbox layouts.
          </Description>
          <Props of={Flex} />
        </>
      ),
    },
  },
};

export const Basic = (args: any) => (
  <Flex {...args} flexDirection="column" pb={4} pt={4}>
    <Box bg="neutralGray" p={'spacingSizeXxs'} mb={'spacingSizeXs'}>
      <Text color="textColor">This is a flex box item</Text>
    </Box>
    <Box bg="accentPrimaryColor" p={3}>
      <Text color="textColor">This is a flex box item</Text>
    </Box>
  </Flex>
);
