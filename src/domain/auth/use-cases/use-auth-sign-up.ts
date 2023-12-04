import {useMutation} from '@tanstack/react-query';

import {MutationOptions} from '@infra';

import {authService} from '../auth-service';
import {SignUpData} from '../auth-types';

export function useAuthSignUp(options?: MutationOptions<void>) {
  const mutation = useMutation<void, Error, SignUpData>({
    mutationFn: signUpData => authService.signUp(signUpData),
    retry: false,
    onSuccess: () => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });

  function signUp(signUpData: SignUpData) {
    mutation.mutate(signUpData);
  }

  return {
    isLoading: mutation.isPending,
    signUp,
  };
}
