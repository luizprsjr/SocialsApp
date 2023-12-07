import React, {useEffect} from 'react';
import {createContext, useState} from 'react';

import {registerInterceptor} from '@api';
import {AuthCredentials, authService} from '@domain';

import {authCredentialsStorage} from '../auth-credentials-storage';
import {AuthCredentialsService} from '../auth-credentials-type';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  userId: null,
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
    const interceptor = registerInterceptor({
      authCredentials,
      removeCredentials,
      saveCredentials,
    });

    // remove listener when component unmount
    return interceptor;
  }, [authCredentials]);

  async function startAuthCredentials() {
    try {
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

  const userId = authCredentials?.user.id || null;

  return (
    <AuthCredentialsContext.Provider
      value={{
        authCredentials,
        isLoading,
        saveCredentials,
        removeCredentials,
        userId,
      }}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
