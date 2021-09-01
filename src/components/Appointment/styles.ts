import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const { colors, fonts } = theme;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.title700,
    color: colors.heading,
    fontSize: 18,
  },
  category: {
    fontFamily: fonts.text400,
    color: colors.highlight,
    fontSize: 13,
  },
  game: {
    fontFamily: fonts.text400,
    color: colors.highlight,
    fontSize: 13,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
  },
  date: {
    marginLeft: 12,
    fontFamily: fonts.text500,
    color: colors.highlight,
    fontSize: 13,
  },
  playersContainer: {
    flexDirection: 'row',
  },
  players: {
    marginLeft: 12,
    fontFamily: fonts.text500,
    color: colors.highlight,
    fontSize: 13,
  },
});
