import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

type GuildIconProps = {
  icon: string;
};

export function GuildIcon({ icon }: GuildIconProps) {
  return (
    <Image style={styles.image} source={{ uri: icon }} resizeMode="cover" />
  );
}
