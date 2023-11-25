import {postAdapter} from './post-adapter';
import {postApi} from './post-api';
import {Post} from './post-types';

async function getList(page: number): Promise<Post[]> {
  const postPageAPI = await postApi.getList({page, per_page: 5});
  const postList = postPageAPI.data.map(postAdapter.toPost);

  return postList;
}

export const postService = {
  getList,
};
