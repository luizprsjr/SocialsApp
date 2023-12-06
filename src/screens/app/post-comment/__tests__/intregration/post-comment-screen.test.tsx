import React from 'react';

import {renderScreen} from 'test-utils';

import {PostCommentScreen} from '../../post-comment-screen';

describe('integration: PostCommentScreen', () => {
  it('should render the screen', () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />,
    );
  });
});
