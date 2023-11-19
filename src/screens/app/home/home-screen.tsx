import React from 'react';

import {AppTabScreenProps} from '@routes';
import {Button, Screen, Text} from '@ui';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="Favorite"
        onPress={() => navigation.navigate('FavoriteScreen')}
      />
    </Screen>
  );
}
