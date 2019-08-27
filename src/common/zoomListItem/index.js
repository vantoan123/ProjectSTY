import React, { Component } from 'react';
import {
    Animated,
    Dimensions,
    View,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import * as EmotionsData from '../../constants/emotionsData';
const { width, height } = Dimensions.get('window');
const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);
import Item from '../Item/index';
import styles from './styles';
const img1 = require('../../../assets/images/lock.png');
const img2 = require('../../../assets/images/PlayVideo.png');
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import Demo from '../ButtonListItem/listItems';

class zoomListItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressedStyle: {},

            org_width: width - 20,
            org_height: height / 3,

            top_width: new Animated.Value(width - 20),
            top_height: new Animated.Value(height / 3),

            top_pan: new Animated.ValueXY(),

            back_opac: new Animated.Value(0),

            TopBorderRadius: 5,
            BottomBorderRadius: 5,

            offset: 0,

            pressed: false,
        };

        this._onPress = this._onPress.bind(this);
        this.calculateOffset = this.calculateOffset.bind(this);

    }

    _onPress() {
        this.setState({ pressed: !this.state.pressed });
        this.calculateOffset();
    }

    grow() {
        this.setState({ TopBorderRadius: 0, BottomBorderRadius: 5 });

        Animated.parallel([
            Animated.spring(
                this.state.top_width,
                {
                    toValue: width
                }
            ).start(),
            Animated.spring(
                this.state.top_height,
                {
                    toValue: height / 1.1
                }
            ).start(),
            // chỉnh căn lề phóng to của list item
            Animated.spring(
                this.state.top_pan,
                {
                    toValue: {
                        x: 0,
                        y: -this.state.offset + 50
                    }
                }
            ).start(),

            Animated.timing(
                this.state.back_opac,
                {
                    toValue: 1
                }
            ).start(),
        ])
    }

    shrink() {

        this.setState({ TopBorderRadius: 5, BottomBorderRadius: 0 });
        Animated.parallel([
            Animated.spring(
                this.state.top_width,
                {
                    toValue: this.state.org_width
                }
            ).start(),
            Animated.spring(
                this.state.top_height,
                {
                    toValue: this.state.org_height
                }
            ).start(),
            Animated.spring(
                this.state.top_pan,
                {
                    toValue: {
                        x: 0,
                        y: 0
                    }
                }
            ).start(),
            Animated.timing(
                this.state.back_opac,
                {
                    toValue: 0
                }
            ).start(),
        ])
    }
    calculateOffset() {
        if (this.refs.container) {
            this.refs.container.measure((fx, fy, width, height, px, py) => {
                this.setState({ offset: py }, () => {
                    if (this.state.pressed) {
                        this.grow();
                    } else {
                        this.shrink();
                    }
                })
            });
        }
    }
    onPlay() {
        this.props.navigation.navigate('MainScreen');
    }
    renderTop() {
        const { title, icon } = this.props;
        var back = this.state.pressed
            ?
            <TouchableOpacity style={[styles.backButton]} onPress={this._onPress}>
                <Animated.View style={{ opacity: this.state.back_opac }}>
                    <Text style={{ color: 'black' }}><Icon name='chevron-left' /></Text>
                </Animated.View>
            </TouchableOpacity>
            : <View />

        const dataChild = EmotionsData.emotionsData.filter(data => {
            return data.parentId === 0;
        });

        return (
            <AnimatedImageBackground source={this.props.image}
                style={[styles.top, {
                    width: this.state.top_width,
                    height: this.state.top_height,
                    transform: this.state.top_pan.getTranslateTransform()
                }]}
            >
                <View style={styles.listView}>
                    <Text style={styles.title}>
                        <Image source={icon} />{title}
                    </Text>
                    <ScrollView style={styles.scrollView}>
                        {dataChild.map((item, key) => (
                            <Item
                                name={item.name}
                                title={item.title}
                                time={item.time}
                                image={img1}
                                imagePlay={img2}
                                key={key}
                                // onPress={() => this.onPlay()}
                            />
                        ))}
                        {/* <Demo/> */}
                    </ScrollView>
                </View>
                {back}
            </AnimatedImageBackground>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress={!this.state.pressed ? this._onPress : null}
                >
                    <View ref="container"
                        style={[{ alignItems: 'center' }]}>
                        {this.renderTop()}
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
const mapStateToProps = state => ({
    userType: state.auth.userType,
});

export default connect(mapStateToProps, {
})(zoomListItems);
