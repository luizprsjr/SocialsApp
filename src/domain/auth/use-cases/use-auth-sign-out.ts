import {useMutation} from '@tanstack/react-query';

import {useAuthCredentials} from '@services';

import {authService} from '../auth-service';

export function useAuthSignOut() {
  const {removeCredentials} = useAuthCredentials();
  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSuccess: () => {
      authService.removeToken();
      removeCredentials();
    },
  });

  return {
    isLoading: mutation.isPending,
    signOut: () => mutation.mutate(),
  };
}
