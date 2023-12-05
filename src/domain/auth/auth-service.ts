import {api} from '@api';

import {authAdapter} from './auth-adapter';
import {authApi} from './auth-api';
import {AuthCredentials, SignUpData} from './auth-types';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const authCredentialsAPI = await authApi.signIn(email, password);
    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch (error) {
    throw new Error('email ou senha inválido');
  }
}

async function signOut(): Promise<string> {
  const message = await authApi.signOut();
  return message;
}

async function isUserNameAvailable(username: string): Promise<boolean> {
  const {isAvailable} = await authApi.isUserNameAvailable({username});
  return isAvailable;
}
async function isEmailAvailable(email: string): Promise<boolean> {
  const {isAvailable} = await authApi.isEmailAvailable({email});
  return isAvailable;
}

async function signUp(signUpData: SignUpData): Promise<void> {
  await authApi.signUp(signUpData);
}

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

export const authService = {
  signIn,
  signOut,
  signUp,
  isUserNameAvailable,
  isEmailAvailable,
  updateToken,
  removeToken,
};
