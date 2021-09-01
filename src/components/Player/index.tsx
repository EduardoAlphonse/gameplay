import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { Avatar } from '../Avatar';

export type PlayerType = {
  id: string;
  username: string;
  avatarURL: string;
  status: 'online' | 'busy' | 'unavailable';
};

type PlayerProps = {
  data: PlayerType;
};

export function Player({ data }: PlayerProps) {
  const { primary, online } = theme.colors;

  const statusList = {
    online: 'Disponível',
    busy: 'Ocupado',
    unavailable: 'Indisponível',
  };

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatarURL} />

      <View style={styles.content}>
        <Text style={styles.username}>{data.username}</Text>

        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              { backgroundColor: theme.colors[data.status] },
            ]}
          />

          <Text style={styles.statusText}>{statusList[data.status]}</Text>
        </View>
      </View>
    </View>
  );
}
