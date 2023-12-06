import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

import {IconProps, PasswordInput} from '@ui';

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

  it('should show the password when pressing the eye button', () => {
    const mockedOnChange = jest.fn();
    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );
    const eyeIcon: IconProps['name'] = 'eyeOff';
    fireEvent.press(screen.getByTestId(eyeIcon));
    const eyeOffIcon: IconProps['name'] = 'eyeOn';
    const eyeOffIconElement = screen.getByTestId(eyeOffIcon);
    expect(eyeOffIconElement).toBeTruthy();
    const inputElement = screen.getByPlaceholderText(/password/);
    expect(inputElement).toHaveProp('secureTextEntry', false);
  });
});
