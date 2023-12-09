import {apiAdapter} from '@api';
import {Page} from '@types';

import {postAdapter} from './post-adapter';
import {postApi} from './post-api';
import {Post} from './post-types';

async function getList(page: number): Promise<Page<Post>> {
  const postPageAPI = await postApi.getList({page, per_page: 5});

  return apiAdapter.toPageModel(postPageAPI, postAdapter.toPost);
}

export const postService = {
  getList,
};
