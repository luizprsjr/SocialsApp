import {api} from '@api';

import {UserAPI} from '../user';

import {AuthCredentialsAPI, SignUpDataAPI} from './auth-types';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>('auth/login', {
    email,
    password,
  });
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.get<string>('auth/profile/logout');
  return response.data;
}

async function signUp(data: SignUpDataAPI): Promise<UserAPI> {
  const response = await api.post<UserAPI>('auth/register', data);
  return response.data;
}

export const authApi = {
  signIn,
  signOut,
  signUp,
};
