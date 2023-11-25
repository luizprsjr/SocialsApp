import {postAdapter} from './post-adapter';
import {postApi} from './post-api';
import {Post} from './post-types';

async function getList(): Promise<Post[]> {
  const postPageAPI = await postApi.getList();
  const postList = postPageAPI.data.map(postAdapter.toPost);

  return postList;
}

export const postService = {
  getList,
};
