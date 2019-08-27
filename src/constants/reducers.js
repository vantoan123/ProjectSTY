import { combineReducers } from 'redux';
import { NavigationActions, createSwitchNavigator } from "react-navigation";
import authReducers from '../components/Login/reducer';
import newUserReducer from '../components/NewUser/reducer';
import listItemsReducer from '../common/ButtonListItem/reducer'
import AppNavigator from '../routes/AppNavigator';
import {
  NAVIGATE_LOGIN,
  NAVIGATE_HOME,
  NAVIGATE_LIST_ITEM,
} from '../constants/action-types';
 const firstAction = AppNavigator.router.getActionForPathAndParams('Home'); //Login ,Home
// const firstAction = AppNavigator.router.getActionForPathAndParams('Login'); //Login ,Home
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case NAVIGATE_LOGIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    case NAVIGATE_HOME:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    case NAVIGATE_LIST_ITEM:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'ListItem' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}
export default combineReducers({
  auth: authReducers,
  nav,
  newUserReducer,
  listItemsReducer
});
