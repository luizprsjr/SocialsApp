import {PageAPI} from '@api';

import {PostAPI} from './post-types';

async function getList(): Promise<PageAPI<PostAPI>> {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer Token',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();
  return data;
}

export const postApi = {
  getList,
};
