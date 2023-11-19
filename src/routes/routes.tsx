import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './app-stack';
import {AuthStack} from './auth-stack';

export function Router() {
  const authenticated = true;

  return (
    <NavigationContainer>
      {authenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
