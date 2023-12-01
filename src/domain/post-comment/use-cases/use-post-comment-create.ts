import {useMutation, useQueryClient} from '@tanstack/react-query';

import {PostComment} from '@domain';
import {MutationOptions, QueryKeys} from '@infra';

import {postCommentService} from '../post-comment-service';

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const queryClient = useQueryClient();

  const {mutate, isPending, isError} = useMutation<
    PostComment,
    unknown,
    {message: string}
  >({
    mutationFn: variables =>
      postCommentService.create(postId, variables.message),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage || 'ocorreu um erro');
      }
    },
  });

  async function createComment(message: string) {
    mutate({message});
  }

  return {
    createComment,
    isPending,
    isError,
  };
}