import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Input } from 'native-base';
import { required, usernameValidation, passwordValidation, doBValidation, pincodeValidation, firstnameValidation, lastnameValidation, phoneNumberValidation } from '../../utils/validators';
import styles from './styles';

const propTypes = {
  inputType: PropTypes.oneOf(['username', 'dob', 'phonenumber', 'firstname', 'lastname', 'pincode', 'serialnumber']),
  isRequire: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeHolder: PropTypes.string,
  keyboardType: PropTypes.string,
  inputStyle: PropTypes.object,
};

const defaultProps = {
  inputType: 'username',
  isRequire: false,
  onChange: null,
  placeHolder: '',
  keyboardType: 'default',
  inputStyle: {}
};

class InputText extends Component {
  constructor(props) {
    super(props);
    this.onInit(props);
    this.state = {
      isValid: true,
    };
  }

  onInit(props) {
    let isValid = true;
    switch (props.inputType) {
      case 'username':
        isValid = usernameValidation(props.value) && required(props.value);
        break;
      case 'dob':
        isValid = doBValidation(props.value) && required(props.value);
        break;
      case 'phonenumber':
        isValid = phoneNumberValidation(props.value) && required(props.value);
        break;
      case 'firstname':
        isValid = firstnameValidation(props.value) && required(props.value);
        break;
      case 'lastname':
        isValid = lastnameValidation(props.value) && required(props.value);
        break;
      default:
        break;
    }

    if (this.props.onChange) {
      this.props.onChange(props.value, isValid);
    }
  }

  onChangeText(newValue) {
    let isValid = this.state.isValid;
    switch (this.props.inputType) {
      case 'username':
        isValid = usernameValidation(newValue) && required(newValue);
        break;
      case 'dob':
        isValid = doBValidation(newValue) && required(newValue);
        break;
      case 'phonenumber':
        isValid = phoneNumberValidation(newValue) && required(newValue);
        break;
      case 'firstname':
        isValid = firstnameValidation(newValue) && required(newValue);
        break;
      case 'lastname':
        isValid = lastnameValidation(newValue) && required(newValue);
        break;
      default:
        break;
    }
    this.setState(oldState => ({ ...oldState, isValid }));
    if (this.props.onChange) {
      this.props.onChange(newValue, isValid);
    }
  }

  render() {
    const {
      inputType, value, placeholder, isSecurity, autoCapitalize, isShowIcon, showInvalidText, invalidMessage, autoFocus, maxLength, inputStyle, keyboardType } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.iconAndInput}>
          <View style={styles.inputContainer}>
            <Input
              autoCapitalize={(autoCapitalize) || 'none'}
              secureTextEntry={(isSecurity) || (inputType === 'dob')}
              placeholder={placeholder}
              placeholderTextColor="#999999"
              onChangeText={text => this.onChangeText(text)}
              value={value}
              style={{ ...styles.input, ...inputStyle, ...((this.state.isValid || (value === '')) ? ({}) : (styles.inputInvalid)) }}
              returnKeyType="next"
              keyboardType={keyboardType}
              maxLength={maxLength}
            />
          </View>
        </View>
        {
          (showInvalidText && !this.state.isValid && (value !== '')) &&
          <View style={styles.messageTextContainer}>
            <Text style={styles.messageTextContainer}>
              {(showInvalidText && !this.state.isValid && (value !== '')) ? (invalidMessage) : (' ')}
            </Text>
          </View>
        }

      </View>
    );
  }
}

InputText.propTypes = propTypes;
InputText.defaultProps = defaultProps;
export default InputText;
