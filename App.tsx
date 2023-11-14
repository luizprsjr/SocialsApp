import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';

import {Button, Icon, Text, TextInput, theme} from './src/ui';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text marginBottom="s8" preset="headingLarge">
            Olá
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <TextInput
            errorMessage="mensagem de error"
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
          />

          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            RightComponent={<Icon color="gray2" name="eyeOn" />}
            boxProps={{mb: 's10'}}
          />

          <Text color="primary" preset="paragraphSmall" bold>
            Esqueci minha senha
          </Text>

          <Button marginTop="s48" title="Entrar" />
          <Button preset="outline" marginTop="s12" title="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
