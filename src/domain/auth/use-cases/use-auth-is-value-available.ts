import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';
import {QueryKeys} from '@infra';

import {authService} from '../auth-service';

interface Param {
  username: string;
  enabled: boolean;
}

export function useAuthIsUsernameAvailable({username, enabled}: Param) {
  const debouncedUsername = useDebounce(username, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [QueryKeys.IsUserNameAvailable, debouncedUsername],
    queryFn: () => authService.isUserNameAvailable(debouncedUsername),
    retry: false,
    staleTime: 20000,
    enabled: enabled && debouncedUsername.length > 0,
  });

  const isDebouncing = debouncedUsername !== username;

  return {
    isUnavailable: data === false,
    isFetching: isFetching || isDebouncing,
  };
}
