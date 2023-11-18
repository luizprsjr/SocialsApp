import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as Auth from '../screens/auth';
import {IconProps} from '../ui';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgotPasswordScreen: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}
        initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={Auth.LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={Auth.SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={Auth.SuccessScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={Auth.ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
