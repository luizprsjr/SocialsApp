import React from 'react';

import {Button, PasswordInput, Screen, Text, TextInput} from '../../ui';

export function LoginScreen() {
  return (
    <Screen scrollable>
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

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
      />

      <Text color="primary" preset="paragraphSmall" bold>
        Esqueci minha senha
      </Text>

      <Button marginTop="s48" title="Entrar" />
      <Button preset="outline" marginTop="s12" title="Criar uma conta" />
    </Screen>
  );
}
