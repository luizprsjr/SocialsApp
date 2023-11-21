import {postListMock} from './post-list-mock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  //TODO: simulate api delay
  return postListMock;
}

export const postApi = {
  getList,
};
