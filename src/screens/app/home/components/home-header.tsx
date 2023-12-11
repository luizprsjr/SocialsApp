import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {useAppSafeArea} from '@hooks';
import {Box, BoxProps, Icon, Logo} from '@ui';

export function HomeHeader() {
  const navigation = useNavigation();
  const {top} = useAppSafeArea();

  function navigateToSearchScreen() {
    navigation.navigate('SearchScreen');
  }

  return (
    <Box {...$wrapper} style={{paddingTop: top}}>
      <Logo width={70} />
      <Box flexDirection="row">
        <Box mr="s24">
          <Icon onPress={navigateToSearchScreen} name="search" />
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
