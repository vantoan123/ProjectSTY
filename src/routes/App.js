import React, { Component } from 'react';
import { Root } from 'native-base';
import SwitchNavigator from './SwitchNavigator';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <Root>
        <SwitchNavigator />
      </Root>
    );
  }
}
