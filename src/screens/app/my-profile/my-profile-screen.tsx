import React from 'react';

import {AppTabScreenProps} from '@routes';
import {Button, Screen, Text} from '@ui';

export function MyProfileScreen({
  navigation,
}: AppTabScreenProps<'MyProfileScreen'>) {
  return (
    <Screen>
      <Text preset="headingSmall">My Profile Screen</Text>

      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
