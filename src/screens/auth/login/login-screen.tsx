import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Alert } from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../../../routes'
import { Button, PasswordInput, Screen, Text, TextInput } from '../../../ui'

type LoginFormType = {
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginFormType) {
    Alert.alert(`Email: ${email} ${'\n'} Senha: ${password}`);
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }
  return (
    <Screen scrollable>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        render={({field, fieldState}) => (
          <TextInput
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatória',
          minLength: {
            value: 8,
            message: 'A senha deve ter no mínimo 8 caracteres',
          },
        }}
        render={({field, fieldState}) => (
          <PasswordInput
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>

      <Button
        // disabled={!!emailErrorMessage || password.length < 6}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        marginTop="s48"
        title="Entrar"
      />
      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
      />
    </Screen>
  );
}