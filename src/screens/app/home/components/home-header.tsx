import React from 'react';

import {useAppSafeArea} from '@hooks';
import {Box, BoxProps, Icon} from '@ui';

export function HomeHeader() {
  const {top} = useAppSafeArea();

  return (
    <Box {...$wrapper} style={{paddingTop: top}}>
      <Box backgroundColor="carrotSecondary" height={16} width={70} />
      <Box flexDirection="row">
        <Box mr="s24">
          <Icon name="search" />
        </Box>
        <Box mr="s24">
          <Icon name="bell" />
        </Box>
        <Icon name="comment" />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',

  justifyContent: 'space-between',
  paddingBottom: 's24',
  paddingHorizontal: 's24',
};
