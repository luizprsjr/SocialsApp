import React from 'react';

import {render, screen} from 'test-utils';

import {Post} from '@domain';

import {PostBottom} from '../post-bottom';

const mockedPost: Post = {
  id: 1,
  imageURL: 'fake-url',
  commentCount: 5,
  favoriteCount: 2,
  reactionCount: 8,
  text: 'this is the text (post description)',
  author: {
    id: 2,
    name: 'Maria Julia',
    profileURL: 'https://example.com',
    userName: 'mariajulia',
  },
};

describe('<PostBottom />', () => {
  it('should not show the comment link if post has no comment', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />);
    const commentLinkElement = screen.queryByText(/comentário/);
    expect(commentLinkElement).not.toBeOnTheScreen();
  });
});
