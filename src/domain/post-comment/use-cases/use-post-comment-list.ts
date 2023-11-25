import {usePaginatedList} from '@domain';

import {postCommentService} from '../post-comment-service';

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(postId, page);
  }
  return usePaginatedList(getList);
}
