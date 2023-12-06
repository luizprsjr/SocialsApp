import {renderHook, waitFor} from '@testing-library/react-native';
import {AllTheProviders} from 'test-utils';

import {authService} from '../../auth-service';
import {useAuthSignIn} from '../use-auth-sign-in';

import {mockedAuthCredentials} from './mocked-data/mocks';

const mockedSaveCredentials = jest.fn();
jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');
  return {
    ...originalModule,
    useAuthCredentials: () => ({
      saveCredentials: mockedSaveCredentials,
    }),
  };
});

describe('useAuthSignIn', () => {
  it('should save the credentials if the sign-in is successfully', async () => {
    jest
      .spyOn(authService, 'signIn')
      .mockResolvedValueOnce(mockedAuthCredentials);
    const mockedOnSuccess = jest.fn();
    const {result} = renderHook(
      () => useAuthSignIn({onSuccess: mockedOnSuccess}),
      {
        wrapper: AllTheProviders,
      },
    );
    result.current.signIn({email: 'any_mail@mail.com', password: '123'});
    await waitFor(() => expect(result.current.isSuccess).toBe(true), {
      timeout: 5000,
    });
    expect(mockedSaveCredentials).toHaveBeenCalledWith(mockedAuthCredentials);
    expect(mockedOnSuccess).toHaveBeenCalledWith(mockedAuthCredentials);
  });
  it('should call the onError function with a message if sign-in fails', async () => {
    jest
      .spyOn(authService, 'signIn')
      .mockRejectedValue(new Error('invalid user'));
    const mockedOnError = jest.fn();
    const {result} = renderHook(() => useAuthSignIn({onError: mockedOnError}), {
      wrapper: AllTheProviders,
    });
    result.current.signIn({email: 'any_mail@mail.com', password: '123'});
    await waitFor(() => expect(result.current.isError).toBe(true));
    expect(mockedOnError).toHaveBeenCalledWith('invalid user');
  });
});
