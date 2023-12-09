import React, {useState} from 'react';

import {AppScreenProps} from '@routes';
import {Icon, Screen, Text, TextInput} from '@ui';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const [search, setSearch] = useState('');
  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          value={search}
          onChangeText={setSearch}
          LeftComponent={<Icon color="gray3" name="search" />}
        />
      }>
      <Text>Search Screen</Text>
    </Screen>
  );
}
