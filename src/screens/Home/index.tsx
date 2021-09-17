import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Appointment } from '../../components/Appointment';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Divider } from '../../components/Divider';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';

import { Profile } from '../../components/Profile';

import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('');
  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails');
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: 'https://64.media.tumblr.com/c8cdbafa3f6c9865dec282f8e99b0b0b/abc6fd526245644c-c6/s400x600/3e200eea498d08f9c819e1ecff9bcb4d7b1fffb1.png',
        owner: true,
      },
      game: 'League of Legends',
      category: '1',
      date: '22/10 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Valorosos',
        icon: 'https://64.media.tumblr.com/e99526bf0952b1a986ec372657ca74a0/9c62f74a60160732-e2/s128x128u_c1/606e741cf53ef20cedd6e1a6dd312b5298ac81e2.pnj',
        owner: false,
      },
      game: 'Valorant',
      category: '3',
      date: '23/10 às 19:00h',
      description: 'Diversão com os parça',
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Runeteros',
        icon: 'https://www.freeiconspng.com/thumbs/discord-icon/discord-metro-style-icon-0.png',
        owner: false,
      },
      game: 'League of Legends',
      category: '3',
      date: '23/10 às 19:00h',
      description: 'Diversão com os parça',
    },
  ];

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        selectedCategory={category}
        handleCategorySelect={handleCategorySelect}
      />

      <View style={{ flex: 1 }}>
        <ListHeader
          title="Partidas agendadas"
          subtitle="Total 2"
          style={{ marginHorizontal: 24, marginTop: 40 }}
        />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment data={item} onPress={handleAppointmentDetails} />
          )}
          contentContainerStyle={{ paddingBottom: 24 }}
          ItemSeparatorComponent={() => <Divider />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  );
}
