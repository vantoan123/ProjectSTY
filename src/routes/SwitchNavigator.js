import { createSwitchNavigator } from 'react-navigation';
import AppNavigator from './AppNavigator';
import {
  createReduxContainer,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

const appCreateReduxContainer = createReduxContainer(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const SwitchNavigator = connect(mapStateToProps)(appCreateReduxContainer);

// const SwitchNavigator = createAppContainer(RootStack);

export default SwitchNavigator;
