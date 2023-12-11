import React from 'react';

import {ReactTestInstance} from 'react-test-renderer';
import {fireEvent, render, screen} from 'test-utils';

import {theme} from '@ui';

import {Button, ButtonProps} from '../button';

function renderComponent(props?: Partial<ButtonProps>) {
  render(<Button title="Button Title" {...props} />);
  const titleElement = screen.queryByText(/button title/i);
  const buttonElement = screen.getByTestId('button');
  const loadingElement = screen.queryByTestId('activity-indicator');
  return {titleElement, loadingElement, buttonElement};
}

describe('<Button />', () => {
  it('should call the onPress function when is pressed', () => {
    const mockedOnPress = jest.fn();
    const {titleElement, loadingElement} = renderComponent({
      onPress: mockedOnPress,
    });
    fireEvent.press(titleElement as ReactTestInstance);
    expect(mockedOnPress).toHaveBeenCalled();
    expect(loadingElement).not.toBeOnTheScreen();
  });

  it('should not call onPress function when it is disabled and it pressed', () => {
    const mockedOnPress = jest.fn();
    const {titleElement} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });
    fireEvent.press(titleElement as ReactTestInstance);
    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  it('should have gray title when the button id disabled', () => {
    const {titleElement} = renderComponent({disabled: true});
    expect(titleElement).toHaveStyle({color: theme.colors.gray2});
  });

  describe('when button is loading', () => {
    it('should shows activity indicator', () => {
      const {loadingElement} = renderComponent({loading: true});
      expect(loadingElement).toBeOnTheScreen();
    });
    it('should hide button title', () => {
      const {titleElement} = renderComponent({loading: true});
      expect(titleElement).not.toBeOnTheScreen();
    });
    it('should disable onPress function', () => {
      const mockedOnPress = jest.fn();
      const {buttonElement} = renderComponent({
        loading: true,
        onPress: mockedOnPress,
      });
      fireEvent.press(buttonElement);
      expect(mockedOnPress).not.toHaveBeenCalled();
    });
  });
});
