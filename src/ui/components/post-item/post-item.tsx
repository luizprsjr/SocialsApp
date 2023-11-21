import React from 'react';

import {Post} from '@domain';
import {Box} from '@ui';

import {PostActions} from './components/post-actions';
import {PostBottom} from './components/post-bottom';
import {PostHeader} from './components/post-header';
import {PostImage} from './components/post-image';

interface Props {
  post: Post;
}
export function PostItem({post}: Props) {
  return (
    <Box paddingHorizontal="s24" marginBottom="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
      <PostBottom
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
      />
    </Box>
  );
}
