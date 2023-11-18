import {useTheme} from '@shopify/restyle';
import {ThemeProps} from '@ui';

export function useAppTheme() {
  return useTheme<ThemeProps>();
}
