import {userAdapter} from '../user/user-adapter';

import {AuthCredentials, AuthCredentialsAPI} from './auth-types';

function toAuthCredentials(
  authCredentialsAPI: AuthCredentialsAPI,
): AuthCredentials {
  return {
    token: authCredentialsAPI.auth.token,
    tokenExpiresAt: authCredentialsAPI.auth.expires_at,
    refreshToken: authCredentialsAPI.auth.refreshToken,
    user: userAdapter.toUser(authCredentialsAPI.user),
  };
}

export const authAdapter = {toAuthCredentials};
