import {apiAdapter} from '@api';
import {Page} from '@types';

import {userAdapter} from './user-adapter';
import {userApi} from './user-api';
import {User} from './user-types';

async function getById(id: number): Promise<User> {
  const userAPI = await userApi.getById(id.toString());
  return userAdapter.toUser(userAPI);
}

async function searchUser(search: string): Promise<Page<User>> {
  const userPageAPI = await userApi.getList(search);

  return apiAdapter.toPageModel(userPageAPI, userAdapter.toUser);
}

export const userService = {
  getById,
  searchUser,
};
