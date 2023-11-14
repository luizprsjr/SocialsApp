import React, {useState} from 'react';

import {Icon} from './icon';
import {TextInput, TextInputProps} from './text-input';

type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;
export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    console.log(isSecureTextEntry);
    setIsSecureTextEntry(prev => !prev);
  }
  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          color="gray2"
          name={isSecureTextEntry ? 'eyeOff' : 'eyeOn'}
        />
      }
    />
  );
}