import React, {useState} from 'react';

import {useUserSearch} from '@domain';
import {useDebounce} from '@hooks';
import {AppScreenProps} from '@routes';
import {Icon, Screen, Text, TextInput} from '@ui';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);
  const {list} = useUserSearch(debouncedSearch);

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          placeholder="Digite sua busca"
          value={search}
          onChangeText={setSearch}
          LeftComponent={<Icon color="gray3" name="search" />}
        />
      }>
      {list.map(user => (
        <Text key={user.id}>{user.username}</Text>
      ))}
    </Screen>
  );
}
