import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import * as ButtonData from '../../constants/buttonData';
import { changeSubReport } from './actions';
import Item from '../Item/index';
import styles from './styles';
const img1 = require('../../../assets/images/lock.png');
const img2 = require('../../../assets/images/PlayVideo.png');
import CommonButton from '../../common/CommonButton';
class listItems extends Component {
    onClickBack() {
        this.props.navigation.navigate('OverView');
    }
    onPlay() {
        this.props.navigation.navigate('Play');
    }
    render() {
        const { reasonId, reasonContent } = this.props;
        const dataChild = ButtonData.buttonsData.filter(data => {
            return data.parentId === reasonId;
        });

        return (
            <View style={styles.container}>
                <View style={styles.welcome}>
                    <Text style={styles.txtWelcome}>{reasonContent}</Text>
                </View>

                {/* list button  */}
                <ScrollView>
                    <View style={styles.content1}>
                        {
                            dataChild.map((item, index) => {
                                return (
                                    <Item
                                        key={index}
                                        name={item.name}
                                        title={item.title}
                                        time={item.time}
                                        image={img1}
                                        imagePlay={img2}
                                        onPress={() => this.onPlay()}
                                    />
                                )
                            })
                        }
                    </View>
                </ScrollView>
                <View style={styles.contentWrapper}>
                        <View style={styles.contentButton}>
                            <CommonButton
                                valueText='Back'
                                onPress={() => this.onClickBack()}
                            />
                        </View>
                    </View>
            </View>
        );
    }
}
const mapStateToProps = state => ({
    reasonId: state.listItemsReducer.reasonId,
    reasonContent: state.listItemsReducer.reasonContent,
});

export default connect(
    mapStateToProps,
    {
        changeSubReport
    }
)(listItems);
