import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import thunkMiddleware from 'redux-thunk';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import { name as appName } from '../../app.json';
import rootReducer from '../constants/reducers';

const persistConfig = {
  key: 'root',
  blacklist: [],
  whitelist: ['auth'],
  keyPrefix: appName,
  storage: AsyncStorage,
};
const middlewareNavigation = createReactNavigationReduxMiddleware(
  state => state.nav,
  "root"
);
const middlewares = [
  thunkMiddleware,
  middlewareNavigation,
];
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default () => {
  const store = createStore(persistedReducer, composeWithDevTools(
    applyMiddleware(...middlewares),
  ));
  const persistor = persistStore(store);
  return { store, persistor };
};
