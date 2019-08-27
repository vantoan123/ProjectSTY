
import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import { Header } from 'react-navigation';
import ButtonSquare from '../../common/ButtonListItem/index';
import BuyVip from './buyVip';
import ZoomListItem from '../../common/zoomListItem/index';
const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = Header.HEIGHT * 3;

export default class Overview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scroll: true,
        }
    }
    disableScroll() {
        this.setState({ scroll: !this.state.scroll });
    }
    onPlay() {
        this.props.navigation.navigate('Play');
    }
    render() {
        return (
            <HeaderImageScrollView
                maxHeight={MAX_HEIGHT}
                minHeight={MIN_HEIGHT}
                headerImage={require('../../../assets/images/Header_Image.png')}
                scrollEnabled={this.state.scroll}
            >
                <TriggeringView>
                    <BuyVip />
                    <ButtonSquare />
                    <ZoomListItem
                        icon={require('../../../assets/images/emotions.png')}
                        title="Làm chủ cảm xúc"
                        // onPress={()=>{this.props.navigation.navigate('zoomItem')}}
                    />
                    <ZoomListItem
                        icon={require('../../../assets/images/stress.png')}
                        title="Giải phóng Stress công việc"
                    />
                    <ZoomListItem
                        icon={require('../../../assets/images/love.png')}
                        title="Xủ lý xung đột quan hệ"
                    />
                </TriggeringView>
            </HeaderImageScrollView>
        )
    }
}
