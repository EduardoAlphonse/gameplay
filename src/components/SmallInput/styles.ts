import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  inputContainer: {
    width: 64,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContent: {
    width: 62,
    height: 46,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    lineHeight: 25,
    color: theme.colors.heading,
    textAlign: 'center',
    padding: 10,
  },
});
