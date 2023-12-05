import React, {useEffect} from 'react';
import {createContext, useState} from 'react';

import {authApi} from 'src/domain/auth/auth-api';

import {api} from '@api';
import {AuthCredentials, authService} from '@domain';

import {authCredentialsStorage} from '../auth-credentials-storage';
import {AuthCredentialsService} from '../auth-credentials-type';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export function AuthCredentialsProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIslLading] = useState(true);

  useEffect(() => {
    startAuthCredentials();
  }, []);

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      response => response,
      async responseError => {
        const failedRequest = responseError.config;
        const hasNotRefreshToken = !authCredentials?.refreshToken;
        const isRefreshTokenRequest =
          authApi.isRefreshTokenRequest(failedRequest);

        if (responseError.response.status === 401) {
          if (
            hasNotRefreshToken ||
            isRefreshTokenRequest ||
            failedRequest.sent
          ) {
            removeCredentials();
            return Promise.reject(responseError);
          }

          failedRequest.sent = true;

          const newAuthCredentials =
            await authService.authenticateByRefreshToken(
              authCredentials?.refreshToken,
            );
          saveCredentials(newAuthCredentials);

          failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

          return api(failedRequest);
        }
      },
    );

    // remove listener when component unmount
    return () => api.interceptors.response.eject(interceptor);
  }, [authCredentials?.refreshToken]);

  async function startAuthCredentials() {
    try {
      // await new Promise(resolve => setTimeout(resolve, 2000, ''));
      // authCredentialsStorage.remove();
      const ac = await authCredentialsStorage.get();
      if (ac) {
        authService.updateToken(ac.token);
        setAuthCredentials(ac);
      }
    } catch (error) {
      // TODO: handle error
    } finally {
      setIslLading(false);
    }
  }

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authService.updateToken(ac.token); // api
    authCredentialsStorage.set(ac); // storage
    setAuthCredentials(ac);
  }

  async function removeCredentials(): Promise<void> {
    authService.removeToken(); // api
    authCredentialsStorage.remove(); // storage
    setAuthCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{authCredentials, isLoading, saveCredentials, removeCredentials}}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
