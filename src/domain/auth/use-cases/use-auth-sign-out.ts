import {useMutation} from '@tanstack/react-query';

import {authService} from '../auth-service';

export function useAuthSignOut() {
  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
  });

  return {
    isLoading: mutation.isPending,
    signOut: () => mutation.mutate(),
  };
}
