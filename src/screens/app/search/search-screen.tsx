import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User, useUserSearch} from '@domain';
import {useDebounce} from '@hooks';
import {AppScreenProps} from '@routes';
import {Icon, ProfileUser, Screen, TextInput} from '@ui';

import {SearchHistory} from './components/search-history';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);
  const {list} = useUserSearch(debouncedSearch);

  function renderItem({item}: ListRenderItemInfo<User>) {
    return <ProfileUser user={item} />;
  }

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
      {search.length === 0 ? (
        <SearchHistory />
      ) : (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.username}
        />
      )}
    </Screen>
  );
}
