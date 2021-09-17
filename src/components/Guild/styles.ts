import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    overflow: 'hidden',
    paddingVertical: 16,
  },
  guild: {
    flex: 1,
    marginLeft: 20,
  },
  label: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  game: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
    marginTop: 4,
  },
});
