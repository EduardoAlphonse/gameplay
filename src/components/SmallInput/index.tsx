import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function SmallInput({ ...rest }: TextInputProps) {
  const { secondary75, secondary70, secondary50, secondary40 } = theme.colors;

  return (
    <LinearGradient
      colors={[secondary50, secondary70]}
      style={styles.inputContainer}
    >
      <LinearGradient
        colors={[secondary75, secondary40]}
        style={styles.inputContent}
      >
        <TextInput {...rest} style={styles.input} keyboardType="numeric" />
      </LinearGradient>
    </LinearGradient>
  );
}
