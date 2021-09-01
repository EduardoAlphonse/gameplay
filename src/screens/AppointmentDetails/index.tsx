import React from 'react';
import { View, Text, ImageBackground, FlatList } from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import bannerImg from '../../assets/banner.png';
import { styles } from './styles';
import { ListHeader } from '../../components/ListHeader';
import { Divider } from '../../components/Divider';
import { Player, PlayerType } from '../../components/Player';

export function AppointmentDetails() {
  const players: PlayerType[] = [
    {
      id: '1',
      username: 'Eduardo',
      avatarURL: 'https://github.com/EduardoAlphonse.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Diego',
      avatarURL: 'https://github.com/diego3g.png',
      status: 'busy',
    },
    {
      id: '3',
      username: 'Diego',
      avatarURL: 'https://github.com/diego3g.png',
      status: 'unavailable',
    },
  ];

  return (
    <Background>
      <Header title="Lendários" action={() => {}} />

      <ImageBackground source={bannerImg} style={styles.banner}>
        <Text style={styles.title}>League of Legends</Text>
        <Text style={styles.description}>
          É hoje que vamos chegar ao challenger sem perder uma partida da md10
        </Text>
      </ImageBackground>

      <View style={{ marginTop: 24 }}>
        <ListHeader title="Jogadores" subtitle="Total 2" />
      </View>

      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Player data={item} />}
        ItemSeparatorComponent={() => <Divider />}
      />
    </Background>
  );
}
