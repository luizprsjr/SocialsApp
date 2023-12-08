import React from 'react';
import {Alert, AlertButton} from 'react-native';

import {mockedPostComment, resetInMemoryResponse, server} from '@test';
import {
  act,
  fireEvent,
  renderScreen,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from 'test-utils';

import {authCredentialsStorage} from '@services';

import {PostCommentScreen} from '../../post-comment-screen';

describe('integration: PostCommentScreen', () => {
  beforeAll(() => {
    server.listen();
    jest.useFakeTimers();
  });
  afterEach(() => {
    server.resetHandlers();
    resetInMemoryResponse();
  });
  afterAll(() => {
    server.close();
    jest.resetAllMocks();
    jest.useRealTimers();
  });
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
    expect(comments).toHaveLength(3);
  });

  it('should automatically display a toast message and update the comment list when a comment is deleted', async () => {
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockedPostComment.mateusAuthCredentials);

    let mockedConfirm: AlertButton['onPress'];
    const mockedAlert = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((title, message, buttons) => {
        if (buttons && buttons[0]) {
          mockedConfirm = buttons[0].onPress;
        }
      });

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

    const comment = await screen.findByText(
      mockedPostComment.mateusPostCommentAPI.message,
      {exact: false},
    );
    expect(comment).toBeOnTheScreen();

    fireEvent(comment, 'longPress');
    expect(mockedAlert).toHaveBeenCalled();

    mockedConfirm && mockedConfirm();

    await waitForElementToBeRemoved(() =>
      screen.getByText(mockedPostComment.mateusPostCommentAPI.message, {
        exact: false,
      }),
    );
    const comments = await screen.findAllByTestId('post-comment-id');
    expect(comments).toHaveLength(1);
    await waitFor(() =>
      expect(screen.getByTestId('toast-message')).toBeOnTheScreen(),
    );
    act(() => jest.runAllTimers());
    expect(screen.queryByTestId('toast-message')).not.toBeOnTheScreen();
  });
});
