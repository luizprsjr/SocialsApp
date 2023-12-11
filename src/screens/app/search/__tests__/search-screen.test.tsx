import React from 'react';

import {mockUtils} from '@test';
import {fireEvent, renderScreen, screen} from 'test-utils';

import {AppStack} from '@routes';
import {authCredentialsStorage} from '@services';

describe('integration: SearchScreen', () => {
  beforeAll(() => {
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockUtils.mateusAuthCredentials);
  });
  it('search flow', () => {
    renderScreen(<AppStack initialRouteName="SearchScreen" />);

    const inputText = screen.getByPlaceholderText(/digite sua busca/i);
    expect(inputText).toBeOnTheScreen();
    fireEvent.changeText(inputText, 'mar');
  });
});
