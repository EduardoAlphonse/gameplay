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
      icon: 'https://64.media.tumblr.com/c8cdbafa3f6c9865dec282f8e99b0b0b/abc6fd526245644c-c6/s400x600/3e200eea498d08f9c819e1ecff9bcb4d7b1fffb1.png',
      owner: false,
    },
    {
      id: '2',
      name: 'Valorosos',
      icon: 'https://64.media.tumblr.com/e99526bf0952b1a986ec372657ca74a0/9c62f74a60160732-e2/s128x128u_c1/606e741cf53ef20cedd6e1a6dd312b5298ac81e2.pnj',
      owner: true,
    },
    {
      id: '3',
      name: 'Runeteros',
      icon: 'https://www.freeiconspng.com/thumbs/discord-icon/discord-metro-style-icon-0.png',
      owner: false,
    },
    {
      id: '4',
      name: 'Lendários',
      icon: 'https://64.media.tumblr.com/c8cdbafa3f6c9865dec282f8e99b0b0b/abc6fd526245644c-c6/s400x600/3e200eea498d08f9c819e1ecff9bcb4d7b1fffb1.png',
      owner: false,
    },
    {
      id: '5',
      name: 'Valorosos',
      icon: 'https://64.media.tumblr.com/e99526bf0952b1a986ec372657ca74a0/9c62f74a60160732-e2/s128x128u_c1/606e741cf53ef20cedd6e1a6dd312b5298ac81e2.pnj',
      owner: true,
    },
    {
      id: '6',
      name: 'Runeteros',
      icon: 'https://www.freeiconspng.com/thumbs/discord-icon/discord-metro-style-icon-0.png',
      owner: false,
    },
    {
      id: '7',
      name: 'Lendários',
      icon: 'https://64.media.tumblr.com/c8cdbafa3f6c9865dec282f8e99b0b0b/abc6fd526245644c-c6/s400x600/3e200eea498d08f9c819e1ecff9bcb4d7b1fffb1.png',
      owner: false,
    },
    {
      id: '8',
      name: 'Valorosos',
      icon: 'https://64.media.tumblr.com/e99526bf0952b1a986ec372657ca74a0/9c62f74a60160732-e2/s128x128u_c1/606e741cf53ef20cedd6e1a6dd312b5298ac81e2.pnj',
      owner: true,
    },
    {
      id: '9',
      name: 'Runeteros',
      icon: 'https://www.freeiconspng.com/thumbs/discord-icon/discord-metro-style-icon-0.png',
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
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}
