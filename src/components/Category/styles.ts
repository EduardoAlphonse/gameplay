import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
  },
  check: {
    width: 8,
    height: 8,
    borderRadius: 2,
    position: 'absolute',
    top: 8,
    right: 8,
  },
  checked: {
    backgroundColor: theme.colors.primary,
  },
  unchecked: {
    backgroundColor: theme.colors.secondary100,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 15,
    marginTop: 16,
  },
});
