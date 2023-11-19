import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamList} from '@routes';
import {Screen, Text} from '@ui';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen(props: ScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Setting Screen</Text>
    </Screen>
  );
}
