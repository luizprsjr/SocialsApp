import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
  PressableProps,
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

type RestyleTypes = BackgroundColorProps<ThemeProps> &
  SpacingProps<ThemeProps> &
  LayoutProps<ThemeProps> &
  BorderProps<ThemeProps> &
  SpacingShorthandProps<ThemeProps>;

export type TouchableOpacityBoxProps = RNTouchableOpacityProps & RestyleTypes;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  ThemeProps
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);

export type PressableBoxProps = PressableProps & RestyleTypes;
export const PressableBox = createRestyleComponent<
  PressableBoxProps,
  ThemeProps
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
