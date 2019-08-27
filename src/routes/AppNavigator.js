import React from 'react';
import { Dimensions } from 'react-native';
import { createSwitchNavigator, createStackNavigator,StackNavigator} from 'react-navigation';
import Home from '../components/Home';
import ListItem from '../common/ButtonListItem/listItems'
import PlayAudio from '../components/PlayAudio/App';
import Login from '../components/Login';
import NewUser from '../components/NewUser';
// import ZoomItem from '../common/zoomListItem'

const { width } = Dimensions.get('window');

const MainScreen = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  ListItem: {
    screen: ListItem,
    navigationOptions: {
      header: null,
    },
  },

  OverView: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },

  Play: {
    screen: PlayAudio,
    navigationOptions: {
      header: null,
    },
  },

  // zoom:{
  //   screen :ZoomItem,
  //   navigationOptions: {
  //     header: null,
  //   },
  // }
});
const AppNavigation = createSwitchNavigator(
  {
    MainScreen: { screen: MainScreen },
  },
);
const AppNavigator = createSwitchNavigator(
  {
    AppNavigation,
    Home,
    // Login,
    NewUser,
  },
  {
    index: 0,
    // initialRouteName: "Login",
    initialRouteName: "Home",
    headerMode: 'none'
  },
);

export default AppNavigator;
