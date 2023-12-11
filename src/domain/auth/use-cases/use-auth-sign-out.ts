import {useMutation} from '@tanstack/react-query';

import {useAuthCredentials, useSearchHistoryService} from '@services';

import {authService} from '../auth-service';

export function useAuthSignOut() {
  const {removeCredentials} = useAuthCredentials();
  const {clearUserList} = useSearchHistoryService();
  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSettled: () => {
      removeCredentials();
      clearUserList();
    },
  });

  return {
    isLoading: mutation.isPending,
    signOut: () => mutation.mutate(),
  };
}
