import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  inputContainer: {
    height: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContent: {
    width: Dimensions.get('screen').width - 24 * 2 - 2,
    height: 148,
    borderRadius: 8,
  },
  input: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    lineHeight: 25,
    color: theme.colors.heading,
    textAlign: 'left',
    textAlignVertical: 'top',
    height: '100%',
    padding: 16,
  },
});
