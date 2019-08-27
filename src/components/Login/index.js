import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { Image, Text, TouchableOpacity, AsyncStorage,ImageBackground } from 'react-native';
import { View, Toast } from 'native-base';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import InputText from '../../common/InputText';
import CommonButton from '../../common/CommonButton';
import * as COMMON from '../../constants/common';
import { STORAGE_LOGIN, removeStorageLogin } from '../../utils/storage';
import styles from './styles';
import { usernameChanged, doBChanged, requestLogin } from './actions';
const styLogo = require("../../../assets/images/logo.png");
const styBackGround = require("../../../assets/images/background.png");
// const eyeImg = require("../../../assets/images/lock.png");
class Index extends Component {

    componentDidMount() {
      this._autoLogin().done();
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.isFailed !== nextProps.isFailed) {
        if (nextProps.isFailed) {
          Toast.show({
            text: nextProps.error,
            duration: COMMON.TOAST_DURATION_LONG,
            position: 'bottom',
            textStyle: { textAlign: 'center' },
            type: 'danger',
          });
        }
      }
    }
    constructor(props) {
      super(props);
      this.state = {
        showPass: true,
        press: false,
      };
      this.showPass = this.showPass.bind(this);
    }
    showPass() {
      this.state.press === false
        ? this.setState({showPass: false, press: true})
        : this.setState({showPass: true, press: false});
    }

    _autoLogin = async() => {
      try {
        const value = await AsyncStorage.getItem(STORAGE_LOGIN);
        console.log(value);
        if (value !== null) {
          const infor = JSON.parse(value);
          this.onTextChange('USERNAME', infor.username, true);
          this.onTextChange('DOB', infor.dob, true);
          this.props.requestLogin(infor.username, infor.dob);
        } else {
          console.log('value is null');
        }
      } catch (error) {
      }
    };
    onClickLogin() {
      dismissKeyboard();
      if (this.props.isUsernameValid && this.props.isDoBValid ) {
        const { username, dob } = this.props;
        this.props.requestLogin(username, dob);
      } else {
        Toast.show({
          text: "Invalid username or DoB",
          duration: COMMON.TOAST_DURATION_SHORT,
          position: 'bottom',
          type: 'danger',
          textStyle: { textAlign: 'center' },
        });
      }
    }

    onTextChange(type, newValue, isValid) {
      switch (type) {
        case 'USERNAME':
          this.props.usernameChanged(newValue, isValid);
          break;
        case 'DOB':
          this.props.doBChanged(newValue, isValid);
          break;
      }
    }
  
    render() {
      const { loading, username, dob } = this.props;
      return (
        <ImageBackground style={styles.container} source={styBackGround}>
          <Spinner visible={loading} />
          <View style={styles.logoContainer}>
            <Image resizeMode='contain' style={styles.logo} source={styLogo} />
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.content}>
              <InputText
                ref={txt => this.userInput = txt}
                placeholder="Username"
                inputType="username"
                value={username}
                onChange={(text, isValid) => this.onTextChange('USERNAME', text, isValid)}
                showInvalidText
                invalidMessage="Invalid Username"
                autoFocus={true}
              />
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.content}>
              <InputText
                ref={txt => this.dobInput = txt}
                placeholder="Password"
                inputType="dob"
                value={dob}
                onChange={(text, isValid) => this.onTextChange('DOB', text, isValid)}
                showInvalidText
                invalidMessage="Invalid DoB"
                secureTextEntry={this.state.showPass}
                isSecurity
              />
                {/* <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.showPass}>
          <Image source={eyeImg}  style={styles.iconEye}/>
        </TouchableOpacity> */}
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.content}>
              <CommonButton
                valueText="Login"
                onPress={() => this.onClickLogin()}
               />
            </View>
          </View>
          <TouchableOpacity style={styles.newUser} onPress={() => this.props.navigation.navigate('NewUser')}>
            <Text uppercase={false} style={styles.textNewUser}>Create New User?</Text>
          </TouchableOpacity>
        </ImageBackground>
      );
    }
}

const mapStateToProps = state => ({
  username: state.auth.username,
  dob: state.auth.dob,
  loading: state.auth.loading,
  isUsernameValid: state.auth.isUsernameValid,
  isDoBValid: state.auth.isDoBValid,
  isFailed: state.auth.isFailed,
  error: state.auth.error,
});

export default connect(mapStateToProps, {
  usernameChanged,
  doBChanged,
  requestLogin
})(Index);
