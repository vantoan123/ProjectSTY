import variables from '../../../native-base-theme/variables/platform';

export default {
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 10,
    flex: 1
  },
  iconAndInput: {
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 15,
    height: 50,
    borderColor: variables.brandSecondary,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    color:'#eee'
  },
  inputInvalid: {
    borderColor: variables.brandDanger,
    backgroundColor: 'rgba(217, 83, 79, 0.25)',
  },
  messageTextContainer: {
    color: variables.brandDanger,
    fontSize: 14,
  },
};
