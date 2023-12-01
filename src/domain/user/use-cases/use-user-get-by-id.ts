import {useQuery} from '@tanstack/react-query';

import {QueryKeys} from '@infra';

import {userService} from '../user-service';

export function useUserGetById(id: number) {
  const {data, isLoading, isError, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getById(id),
    staleTime: 1000 * 30, // 30 seconds
    // cacheTime: 5000,
  });

  return {
    user: data,
    isLoading,
    isFetching,
    isError,
    refetch,
  };
}
