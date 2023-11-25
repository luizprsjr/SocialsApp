import {api, PageAPI} from '@api';

import {PostAPI} from './post-types';

async function getList(): Promise<PageAPI<PostAPI>> {
  //TODO: simulate api delay
  await new Promise(resolve => setTimeout(() => resolve(''), 2000));

  const response = await api.get<PageAPI<PostAPI>>('user/post');
  return response.data;
}

export const postApi = {
  getList,
};
