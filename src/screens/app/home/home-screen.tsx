import React, {useEffect, useState} from 'react';
import {FlatList, Image, ListRenderItemInfo} from 'react-native';

import {Post, postService} from '@domain';
import {AppTabScreenProps} from '@routes';
import {Box, Screen, Text, WIDTH} from '@ui';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  }, []);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return (
      <Box marginBottom="s24">
        <Box flexDirection="row">
          <Image
            source={{uri: item.author.profileURL}}
            style={{width: 32, height: 32}}
          />
          <Text>{item.author.userName}</Text>
        </Box>
        <Image
          source={{uri: item.imageURL}}
          resizeMode="cover"
          style={{width: WIDTH, height: 300}}
        />
      </Box>
    );
  }

  return (
    <Screen>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
}
