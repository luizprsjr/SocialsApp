import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {useAuthCredentials} from '@services';

import {AppStack} from './app-stack';
import {AuthStack} from './auth-stack';

export function Router() {
  const {authCredentials} = useAuthCredentials();

  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
