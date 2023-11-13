import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';

import {useTheme} from '@shopify/restyle';

import {ThemeColors, ThemeProps} from '../theme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color}: Props) {
  const {colors} = useTheme<ThemeProps>();

  return <RNActivityIndicator color={colors[color]} />;
}
