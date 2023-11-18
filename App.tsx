import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ThemeProvider} from '@shopify/restyle';

import {Router} from '@routes';
import {theme} from '@ui';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
