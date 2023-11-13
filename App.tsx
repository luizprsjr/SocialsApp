import React from 'react';
import {SafeAreaView} from 'react-native';

import {Text} from './src/ui/core/text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" italic>
        Socials
      </Text>
      <Text preset="headingMedium">Socials</Text>
      <Text preset="paragraphMedium">Socials</Text>
    </SafeAreaView>
  );
}

export default App;
