import React from 'react';

import {server} from '@test';
import {fireEvent, renderScreen, screen} from 'test-utils';

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
    const inputText = screen.getByPlaceholderText(/adicione um comentário/i);
    fireEvent.changeText(inputText, 'novo comentário');
    fireEvent.press(screen.getByText(/enviar/i));
    const newComment = await screen.findByText(/novo comentário/i);
    expect(newComment).toBeOnTheScreen();
    const comments = await screen.findAllByTestId('post-comment-id');
    expect(comments).toHaveLength(2);
  });
});
