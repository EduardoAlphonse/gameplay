import React from 'react';
import { View, FlatList } from 'react-native';
import { Guild, GuildDataProps } from '../Guild';
import { Divider } from '../Divider';

import { styles } from './styles';

type GuildsProps = {
  handleGuildSelect: (guild: GuildDataProps) => void;
};

export function Guilds({ handleGuildSelect }: GuildsProps) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: false,
    },
    { id: '2', name: 'Valorosos', icon: null, owner: true },
    {
      id: '3',
      name: 'Runeterros',
      icon: null,
      owner: false,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Divider />}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
      />
    </View>
  );
}
