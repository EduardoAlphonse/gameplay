import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Divider() {
  const { secondary40, secondary60 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary40, secondary60]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    />
  );
}
