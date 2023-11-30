import {MutationOptions, useMutation} from '@infra';

import {postCommentService} from '../post-comment-service';

export function usePostCommentRemove(option?: MutationOptions<string>) {
  return useMutation<{postCommentId: number}, string>(
    ({postCommentId}) => postCommentService.remove(postCommentId),
    option,
  );
}
