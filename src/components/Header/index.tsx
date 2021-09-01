import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather, Fontisto } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type HeaderProps = {
  title: string;
  action?: () => void;
};

export function Header({ title, action }: HeaderProps) {
  const navigation = useNavigation();
  const { secondary40, secondary75, heading, primary } = theme.colors;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary75, secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      {action ? (
        <BorderlessButton onPress={action}>
          <Fontisto name="share" size={24} color={primary} />
        </BorderlessButton>
      ) : (
        <View style={{ width: 24 }} />
      )}
    </LinearGradient>
  );
}
