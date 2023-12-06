import React from 'react';

import {render, screen} from 'test-utils';

import {PasswordInput} from '../password-input';

describe('<PasswordInput />', () => {
  it('should start with hidden password', () => {
    const mockedOnchange = jest.fn();
    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnchange}
      />,
    );
    const inputElement = screen.getByPlaceholderText(/password/i);
    expect(inputElement).toHaveProp('secureTextEntry', true);
  });
});
