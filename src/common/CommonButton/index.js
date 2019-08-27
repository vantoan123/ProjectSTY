import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'native-base';
import styles from './styles';

const propTypes = {
  onPress: PropTypes.func,
  valueText: PropTypes.string,
};

const defaultProps = {
  onPress: null,
  valueText: '',
};

class CommonButton extends Component {
  constructor(props) {
    super(props);
  }

  onPressAction() {
    this.props.onPress();
  }

  render() {
    const { valueText } = this.props;
    return (
      <View style={styles.container}>
        <Button onPress={() => this.onPressAction()} style={styles.btn} >
            <Text style={styles.txt}>{valueText}</Text>
        </Button>
      </View>
    );
  }
}

CommonButton.propTypes = propTypes;
CommonButton.defaultProps = defaultProps;
export default CommonButton;
