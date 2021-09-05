import React from 'react';
import { View, Text, StyleSheetProperties, ViewStyle } from 'react-native';

import { styles } from './styles';

type ListHeaderProps = {
  title: string;
  subtitle?: string;
  style?: ViewStyle;
};

export function ListHeader({ title, subtitle, style }: ListHeaderProps) {
  return (
    <View style={[styles.container, style && style]}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </View>
  );
}
