import { AsyncStorage } from 'react-native';

export const STORAGE_LOGIN = '@Storage:login';
export const STORAGE_VALUE_LOGIN = {
  username: '',
  dob: ''
};

export const setStorageLogin = async (selectedValue) => {
  try {
    await AsyncStorage.setItem(STORAGE_LOGIN, selectedValue);
  } catch (error) {
    console.log(error);
  }
};
export const removeStorageLogin = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_LOGIN);
  } catch (error) {
    console.log(error);
  }
};
