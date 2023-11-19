import React from 'react';

import {AppScreenProps} from '@routes';
import {Button, Screen, Text} from '@ui';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Setting Screen</Text>
      <Button
        title="New Post"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {
            screen: 'NewPostScreen',
          })
        }
      />
    </Screen>
  );
}
