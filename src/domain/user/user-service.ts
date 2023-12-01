import {userAdapter} from './user-adapter';
import {userApi} from './user-api';
import {User} from './user-types';

async function getById(id: number): Promise<User> {
  const userAPI = await userApi.getById(id.toString());
  return userAdapter.toUser(userAPI);
}

export const userService = {
  getById,
};
