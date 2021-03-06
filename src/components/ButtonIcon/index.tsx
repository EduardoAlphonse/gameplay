import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, Image, View } from 'react-native';

import discordImg from '../../assets/discord.png';

import { styles } from './styles';

type ButtonIconProps = RectButtonProps & {
  title: string;
};

export function ButtonIcon({ title, ...props }: ButtonIconProps) {
  return (
    <RectButton style={styles.container} {...props}>
      <View style={styles.iconWrapper}>
        <Image source={discordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
