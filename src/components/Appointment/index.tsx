import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { categories } from '../../utils/categories';

import { GuildIcon } from '../GuildIcon';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export type GuildType = {
  // id: string;
  name: string;
  // icon: React.FC<SvgProps>;
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
  const { primary, on } = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>

            <Text style={styles.category}>{category.title}</Text>
          </View>

          <Text style={styles.game}>{data.game}</Text>

          <View style={styles.footer}>
            <View style={styles.dateContainer}>
              <CalendarSvg fill={owner ? primary : on} />
              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersContainer}>
              <PlayerSvg fill={owner ? primary : on} />
              <Text style={[styles.players, { color: owner ? primary : on }]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
