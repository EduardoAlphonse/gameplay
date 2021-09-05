import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {},
  form: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  selectButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    borderRadius: 8,
    paddingRight: 20,
    overflow: 'hidden',
  },
  image: {
    width: 64,
    height: 68,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
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
  dateAndTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },
  inputsContainer: {},
  inputs: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputSeparator: {
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    color: theme.colors.heading,
    marginHorizontal: 6,
  },
  description: {
    marginTop: 28,
  },
  footer: {
    padding: 24,
  },
});
