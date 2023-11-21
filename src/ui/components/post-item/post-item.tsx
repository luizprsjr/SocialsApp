import React from 'react';

import {Post} from '@domain';
import {Box} from '@ui';

import {PostHeader} from './components/post-header';
import {PostImage} from './components/post-image';

interface Props {
  post: Post;
}
export function PostItem({post}: Props) {
  return (
    <Box marginBottom="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
    </Box>
  );
}
