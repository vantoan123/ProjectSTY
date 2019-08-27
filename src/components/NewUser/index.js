import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { View, Toast } from 'native-base';
import InputText from '../../common/InputText';
import { Image, Alert as RNAlert, ImageBackground,ScrollView } from 'react-native';
import * as COMMON from '../../constants/common';
import CommonButton from '../../common/CommonButton';
const styLogo = require("../../../assets/images/logo.png");
const styBackGround = require("../../../assets/images/background.png");
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import Spinner from 'react-native-loading-spinner-overlay';
import { userNameCreate, firstNameCreate, lastNameCreate, doBCreate, phoneNumberCreate, requestRegister } from './actions';

class Index extends Component {

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

    onClickRegister() {
        dismissKeyboard();
        if (this.props.isUsernameValid
            && this.props.isFirstnameValid
            && this.props.isLastnameValid
            && this.props.isDoBValid
            && this.props.isPhonenumberValid
        ) {
            const { username, firstname, lastname, dob, phonenumber } = this.props;
            this.props.requestRegister(username, firstname, lastname, dob, phonenumber);
        } else {
            Toast.show({
                text: "Invalid check the information entered",
                duration: COMMON.TOAST_DURATION_SHORT,
                position: 'bottom',
                type: 'danger',
                textStyle: { textAlign: 'center' },
            });
        }
    }
    onClickCancel() {
        this.props.navigation.navigate('Login');
      }
    onTextCreate(type, newValue, isValid) {
        switch (type){
            case 'USERNAME':
                this.props.userNameCreate(newValue, isValid);
                break;
            case 'FIRSTNAME':
                this.props.firstNameCreate(newValue, isValid);
                break;
            case 'LASTNAME':
                this.props.lastNameCreate(newValue, isValid);
                break;
            case 'DOB':
                this.props.doBCreate(newValue, isValid);
                break;
            case 'PHONENUMBER':
                this.props.phoneNumberCreate(newValue, isValid);
                break;
        }
    }
    render() {
        const { loading, username, firstname, lastname, dob, phonenumber } = this.props;
        return (
            <ImageBackground style={styles.container} source={styBackGround}>
                
                <Spinner visible={loading} />
                <View style={styles.logoContainer}>
                    <Image resizeMode='contain' style={styles.logo} source={styLogo} />
                </View>
                <ScrollView>
                <View style={styles.margintopButton}>
                    <View style={styles.contentWrapper}>
                        <View style={styles.content}>
                            <InputText
                                placeholder="User name"
                                inputType="username"
                                value={username}
                                onChange={(text, isValid) => this.onTextCreate('USERNAME', text, isValid)}
                                showInvalidText
                                invalidMessage="Invalid Username"
                            />
                        </View>
                    </View>
                    <View style={styles.contentWrapper}>
                        <View style={styles.content}>
                            <InputText
                                placeholder="First Name"
                                inputType="firstname"
                                value={firstname}
                                onChange={(text, isValid) => this.onTextCreate('FIRSTNAME', text, isValid)}
                                showInvalidText
                                invalidMessage="Invalid First name"
                            />
                        </View>
                    </View>
                    <View style={styles.contentWrapper}>
                        <View style={styles.content}>
                            <InputText
                                placeholder="Last Name"
                                inputType="lastname"
                                value={lastname}
                                onChange={(text, isValid) => this.onTextCreate('LASTNAME', text, isValid)}
                                showInvalidText
                                invalidMessage="Invalid Last name"
                            />
                        </View>
                    </View>
                    <View style={styles.contentWrapper}>
                        <View style={styles.content}>
                            <InputText
                                placeholder="Date of Birth"
                                inputType="dob"
                                value={dob}
                                onChange={(text, isValid) => this.onTextCreate('DOB', text, isValid)}
                                showInvalidText
                                invalidMessage="Invalid Date of Birth"
                            />
                        </View>
                    </View>
                    <View style={styles.contentWrapper}>
                        <View style={styles.content}>
                            <InputText
                                placeholder="Phone Number"
                                inputType="phonenumber"
                                value={phonenumber}
                                onChange={(text, isValid) => this.onTextCreate('PHONENUMBER', text, isValid)}
                                showInvalidText
                                invalidMessage="Invalid phone number"
                            />
                        </View>
                    </View>
                    <View style={styles.contentWrapper}>
                        <View style={styles.content}>
                            <CommonButton
                                valueText="Register"
                                onPress={() => this.onClickRegister()}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.contentWrapper}>
              <View style={[styles.content, { marginTop: 10, marginBottom: 10} ]}>
                <CommonButton
                  valueText="Cancel"
                  onPress={() => this.onClickCancel()}
                />
              </View>
            </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}
const mapStateToProps = state => ({

    username: state.newUserReducer.username,
    firstname: state.newUserReducer.firstname,
    lastname: state.newUserReducer.lastname,
    dob: state.newUserReducer.dob,
    phonenumber: state.newUserReducer.phonenumber,

    isUsernameValid: state.newUserReducer.isUsernameValid,
    isFirstnameValid: state.newUserReducer.isFirstnameValid,
    isLastnameValid: state.newUserReducer.isLastnameValid,
    isDoBValid: state.newUserReducer.isDoBValid,
    isPhonenumberValid: state.newUserReducer.isPhonenumberValid,
    isFailed: state.newUserReducer.isFailed,
    error: state.newUserReducer.error,
    loading: state.newUserReducer.loading,
});

export default connect(mapStateToProps, {
    userNameCreate,
    firstNameCreate,
    lastNameCreate,
    doBCreate,
    phoneNumberCreate,
    requestRegister,
})(Index);
