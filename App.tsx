import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ThemeProvider} from '@shopify/restyle';

import {SignUpScreen} from './src/screens/sign-up';
// import {LoginScreen} from './src/screens/login';
import {theme} from './src/ui';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <LoginScreen /> */}
        <SignUpScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
