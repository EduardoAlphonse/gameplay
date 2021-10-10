import React, { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../../components/Guilds';
import { COLLECTION_APPOINTMENTS } from '../../config/database';

import { GuildDataProps } from '../../components/Guild';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [selectedGuild, setSelectedGuild] = useState<GuildDataProps>(
    {} as GuildDataProps
  );
  const [isGuildsModalVisible, setIsGuildsModalVisible] = useState(false);

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  function toggleGuildsModal() {
    setIsGuildsModalVisible(!isGuildsModalVisible);
  }

  function handleGuildSelect(guildSelect: GuildDataProps) {
    setSelectedGuild(guildSelect);
    toggleGuildsModal();
  }

  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      guild: selectedGuild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description,
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );

    navigation.navigate('Home');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Header title="Agendar partida" />
      <ScrollView>
        <Background>
          <View style={{ marginTop: 24 }}>
            <ListHeader title="Categoria" style={{ marginLeft: 24 }} />

            <CategorySelect
              selectedCategory={category}
              handleCategorySelect={handleCategorySelect}
              hasCheckBox
            />
          </View>

          <View style={styles.form}>
            <RectButton onPress={toggleGuildsModal}>
              <View style={styles.selectButtonContainer}>
                {selectedGuild.name ? (
                  <>
                    <GuildIcon
                      guildId={selectedGuild.id}
                      iconId={selectedGuild.icon}
                    />
                    <View style={styles.guild}>
                      <Text style={styles.label}>{selectedGuild.name}</Text>
                    </View>
                  </>
                ) : (
                  <>
                    <LinearGradient
                      style={styles.image}
                      colors={[
                        theme.colors.secondary75,
                        theme.colors.secondary40,
                      ]}
                    />
                    <Text style={styles.label}>Selecione um servidor</Text>
                  </>
                )}

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.dateAndTime}>
              <View style={styles.inputsContainer}>
                <ListHeader title="Dia e mês" />
                <View style={styles.inputs}>
                  <SmallInput maxLength={2} onChangeText={setDay} />
                  <Text style={styles.inputSeparator}>/</Text>
                  <SmallInput maxLength={2} onChangeText={setMonth} />
                </View>
              </View>

              <View style={styles.inputsContainer}>
                <ListHeader title="Hora" />
                <View style={styles.inputs}>
                  <SmallInput maxLength={2} onChangeText={setHour} />
                  <Text style={styles.inputSeparator}>:</Text>
                  <SmallInput maxLength={2} onChangeText={setMinute} />
                </View>
              </View>
            </View>

            <View style={styles.description}>
              <ListHeader title="Descrição" subtitle="Max 100 caracteres" />

              <Textarea onChangeText={setDescription} />
            </View>
          </View>
          <View style={styles.footer}>
            <Button title="Agendar" onPress={handleSave} />
          </View>
        </Background>
      </ScrollView>

      <ModalView
        visible={isGuildsModalVisible}
        onRequestClose={toggleGuildsModal}
        closeModal={toggleGuildsModal}
      >
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
