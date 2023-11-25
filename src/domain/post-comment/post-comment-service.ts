import {apiAdapter} from '@api';
import {Page} from '@types';

import {postCommentAdapter} from './post-comment-adapter';
import {postCommentApi} from './post-comment-api';
import {PostComment} from './post-comment-types';

const PER_PAGE = 10;
async function getList(
  postId: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentPageAPI = await postCommentApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  });

  return {
    data: postCommentPageAPI.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postCommentPageAPI.meta),
  };
}

export const postCommentService = {
  getList,
};
