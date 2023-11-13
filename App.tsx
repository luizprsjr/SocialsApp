import React from 'react';
import {SafeAreaView} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';

import {Text, theme} from './src/ui';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge" italic>
          Socials
        </Text>
        <Text preset="headingMedium">Socials</Text>
        <Text preset="paragraphMedium">Socials</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
