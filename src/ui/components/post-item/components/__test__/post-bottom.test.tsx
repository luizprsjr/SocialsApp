import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

import {PostBottom} from '../post-bottom';

import {mockedPost} from './mocked-data/mocked-post';

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
