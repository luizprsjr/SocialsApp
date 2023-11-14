import React from 'react';

import {ActivityIndicator} from '../activity-indicator';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../box';
import {Text} from '../text';
import {buttonPresets} from './button-presets';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
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
