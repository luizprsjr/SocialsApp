import React from 'react';

import {useAuthSignOut} from '@domain';
import {AppScreenProps} from '@routes';
import {Button, Screen, Text} from '@ui';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  const {isLoading, signOut} = useAuthSignOut();
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Setting Screen</Text>
      <Button title="Sair da conta" loading={isLoading} onPress={signOut} />
    </Screen>
  );
}
