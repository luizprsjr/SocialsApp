import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';

import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  createBox,
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';
import {ThemeProps} from '@ui';

export const Box = createBox<ThemeProps>();
export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = BackgroundColorProps<ThemeProps> &
  SpacingProps<ThemeProps> &
  LayoutProps<ThemeProps> &
  BorderProps<ThemeProps> &
  SpacingShorthandProps<ThemeProps> &
  RNTouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  ThemeProps
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
