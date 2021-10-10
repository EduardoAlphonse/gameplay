import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { GuildIcon } from '../GuildIcon';

import { styles } from './styles';

export type GuildDataProps = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
};

type GuildProps = TouchableOpacityProps & {
  data: GuildDataProps;
};

export function Guild({ data, ...props }: GuildProps) {
  return (
    <TouchableOpacity {...props} style={styles.container} activeOpacity={0.7}>
      <GuildIcon guildId={data.id} iconId={data.icon} />
      <View style={styles.guild}>
        <Text style={styles.label}>{data.name}</Text>
        <Text style={styles.game}>{data.owner ? 'Dono' : 'Convidado'}</Text>
      </View>
    </TouchableOpacity>
  );
}
