import {renderHook, waitFor} from '@testing-library/react-native';
import {AllTheProviders} from 'test-utils';

import {authService} from '../../auth-service';
import {useAuthSignIn} from '../use-auth-sign-in';

import {mockedAuthCredentials} from './mocked-data/mocks';

describe('useAuthSignIn', () => {
  it('should sign-in', async () => {
    jest
      .spyOn(authService, 'signIn')
      .mockResolvedValueOnce(mockedAuthCredentials);
    const {result} = renderHook(() => useAuthSignIn(), {
      wrapper: AllTheProviders,
    });
    result.current.signIn({email: 'any_mail@mail.com', password: '123'});
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
  // it('should call the onError function with a message if sign-in fails', () => {
  //   const {result} = renderHook(() => useAuthSignIn(), {
  //     wrapper: AllTheProviders,
  //   });
  // });
});
