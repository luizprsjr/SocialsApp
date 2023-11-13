import React from 'react';
import {SafeAreaView} from 'react-native';

import {Text} from './src/ui/core/text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" bold>
        Socials
      </Text>
      <Text preset="paragraphCaption">Socials</Text>
      <Text preset="paragraphMedium">Socials</Text>
    </SafeAreaView>
  );
}

export default App;
