import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';
import CalendarPicker from 'react-native-calendar-picker';
import styles from './styles';
import CommonButton from '../../common/CommonButton';
import { requestLogout } from '../../components/Login/actions';
class Individual extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
            selectedEndDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }
    onDateChange(date, type) {
        if (type === 'END_DATE') {
            this.setState({
                selectedEndDate: date,
            });
        } else {
            this.setState({
                selectedStartDate: date,
                selectedEndDate: null,
            });
        }
    }
    onClickLogout() {
        this.props.requestLogout();
    }
    render() {
        const { selectedStartDate, selectedEndDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        const endDate = selectedEndDate ? selectedEndDate.toString() : '';
        const minDate = new Date();
        const maxDate = new Date(2050, 6, 3);
        return (
            <View style={styles.container}>
                <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={true}
                    minDate={minDate}
                    maxDate={maxDate}
                    todayBackgroundColor="blue"
                    selectedDayColor="#7300e6"
                    selectedDayTextColor="#FFFFFF"
                    onDateChange={this.onDateChange}
                />
                <View>
                    <Text style={styles.text}>SELECTED DATE:{startDate}</Text>
                    <Text style={styles.text}>SELECTED END DATE:{endDate}</Text>
                </View>
                <CommonButton 
                    valueText='Logout'
                    onPress={() => this.onClickLogout()}
                />
            </View>
        );
    }
}
const mapStateToProps = state => ({
    userType: state.auth.userType,
});

export default connect(mapStateToProps, {
    requestLogout
})(Individual);
