import React from 'react';

import {server} from '@test';
import {renderScreen, screen} from 'test-utils';

import {PostCommentScreen} from '../../post-comment-screen';

describe('integration: PostCommentScreen', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it('should automatically update the list when adding a comment', async () => {
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
    const comment = await screen.findByText(/comentário aleatório/i);
    expect(comment).toBeOnTheScreen();
  });
});
