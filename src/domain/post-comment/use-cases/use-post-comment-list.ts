import {usePaginatedList} from 'src/domain/hooks/use-paginated-list';

import {postCommentService} from '../post-comment-service';

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(postId, page);
  }
  return usePaginatedList(getList);
}
