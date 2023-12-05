import React from 'react';

import {
  ActivityIndicator,
  buttonPresets,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@ui';

export type ButtonPreset = 'primary' | 'outline';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.color} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.color}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
