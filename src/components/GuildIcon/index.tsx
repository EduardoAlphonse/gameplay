import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri =
    'https://www.freeiconspng.com/thumbs/discord-icon/discord-metro-style-icon-0.png';

  return <Image style={styles.image} source={{ uri }} resizeMode="cover" />;
}
