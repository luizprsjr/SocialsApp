import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';

import {Box, Button, Text, theme} from './src/ui';
import {Icon} from './src/ui/core/icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Socials
          </Text>

          <Button title="Primary" marginBottom="s12" />
          <Button disabled title="Primary" marginBottom="s12" />
          <Button preset="outline" title="Outline" marginBottom="s12" />

          <Button disabled preset="outline" title="Loading" loading />

          <Box
            flexDirection="row"
            justifyContent="center"
            marginVertical="s20"
            gap="s4">
            <Icon name="chevronRight" size={42} />
            <Icon name="heartFill" size={42} color="buttonPrimary" />
            <Icon name="profile" size={42} />
            <Icon name="profileFill" size={42} />
            <Icon name="heart" size={42} />
            <Icon name="bellOn" color="carrotSecondary" size={42} />
          </Box>
          <Box flexDirection="row" justifyContent="center" gap="s4">
            <Icon name="newPost" size={42} />
            <Icon name="camera" size={42} />
            <Icon name="chat" size={42} />
            <Icon name="chatOn" color="error" size={42} />
            <Icon name="flashOff" size={42} />
            <Icon name="flashOn" size={42} />
          </Box>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
