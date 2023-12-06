import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

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

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('<PostBottom />', () => {
  beforeEach(() => jest.clearAllMocks());
  it('should not show the comment link if post has no comment', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />);
    const commentLinkElement = screen.queryByText(/comentário/);
    expect(commentLinkElement).not.toBeOnTheScreen();
  });

  it('should navigate to PostCommentScreen when pressing the comment link', () => {
    render(<PostBottom {...mockedPost} commentCount={4} />);
    const commentLinkElement = screen.getByText(/comentário/i);
    fireEvent.press(commentLinkElement);
    expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
      postId: mockedPost.id,
      postAuthorId: mockedPost.author.id,
    });
  });
});
