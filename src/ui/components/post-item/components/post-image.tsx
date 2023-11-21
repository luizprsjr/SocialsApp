import React from 'react';
import {Image} from 'react-native';

import {Post} from '@domain';
import {WIDTH} from '@ui';

type Props = Pick<Post, 'imageURL'>;
export function PostImage({imageURL}: Props) {
  return (
    <Image
      source={{uri: imageURL}}
      resizeMode="cover"
      style={{width: WIDTH, height: 300, marginHorizontal: -24}}
    />
  );
}
