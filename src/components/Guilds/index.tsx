import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Guild, GuildDataProps } from '../Guild';
import { Divider } from '../Divider';
import { Load } from '../Load';

import { styles } from './styles';
import { api } from '../../services/api';

type GuildsProps = {
  handleGuildSelect: (guild: GuildDataProps) => void;
};

export function Guilds({ handleGuildSelect }: GuildsProps) {
  const [guilds, setGuilds] = useState<GuildDataProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds');
    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Load />
      ) : (
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
      )}
    </View>
  );
}
