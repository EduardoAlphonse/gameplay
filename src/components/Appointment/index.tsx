import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
// import { SvgProps } from 'react-native-svg';

import { GuildIcon } from '../GuildIcon';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { categories } from '../../utils/categories';

export type GuildType = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
};

export type AppointmentType = {
  id: string;
  guild: GuildType;
  game: string;
  category: string;
  date: string;
  description: string;
};

type AppointmentProps = RectButtonProps & {
  data: AppointmentType;
};

export function Appointment({ data, ...rest }: AppointmentProps) {
  const [category] = categories.filter(
    (category) => category.id === data.category
  );
  const { owner } = data.guild;
  const { primary, online, secondary30, secondary35 } = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.guildIconContainer}
          colors={[secondary30, secondary35]}
        >
          <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
        </LinearGradient>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>

            <Text style={styles.category}>{category.title}</Text>
          </View>

          <Text style={styles.game}>{data.game}</Text>

          <View style={styles.footer}>
            <View style={styles.dateContainer}>
              <CalendarSvg fill={owner ? primary : online} />
              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersContainer}>
              <PlayerSvg fill={owner ? primary : online} />
              <Text
                style={[styles.players, { color: owner ? primary : online }]}
              >
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
