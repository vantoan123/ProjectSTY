import React from "react";
import Hand from '../../common/zoomListItem/index';
import Button from './Button';
import {
    View,
    Animated,
    Dimensions,
} from "react-native";
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import { Header } from 'react-navigation';

const { width, height } = Dimensions.get("window");
const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = Header.HEIGHT * 3;
const FoodItems = [
    {
        image: require('../../../assets/images/emotions.png'), text: 'Làm chủ cảm xúc'
    },
];
const FoodItems1 = [
    {
        image: require('../../../assets/images/stress.png'), text: 'Giải phóng stress công việc'
    },
];
const FoodItems2 = [

    {
        image: require('../../../assets/images/love.png'), text: 'Xử lý xung đột quan hệ'
    },
];

export default class MeditationLead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            xTabOne: 0,
            xTabTwo: 0,
            xTabThree: 0,
            translateX: new Animated.Value(0),
            translateXTabOne: new Animated.Value(0),
            translateXTabTwo: new Animated.Value(width),
            translateXTabThree: new Animated.Value(width),
            translateY: -1000,
            scroll: false,
        }
    };
    disableScroll() {
        this.setState({ scroll: !this.state.scroll });
    }

    handleSlide = type => {
        let {
            active,
            translateX,
            translateXTabOne,
            translateXTabTwo,
            translateXTabThree
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabThree, {
                    toValue: width,
                    duration: 100
                }).start(),
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabThree, {
                    toValue: width,
                    duration: 100
                }).start(),
            ]);
        }
        if (active === 2) {
            Animated.parallel([
                Animated.spring(translateXTabTwo, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabThree, {
                    toValue: 0,
                    duration: 100
                }).start(),
            ]);
        }
    };
    render() {
        let {
            xTabOne,
            xTabTwo,
            xTabThree,
            translateXTabOne,
            translateXTabTwo,
            translateXTabThree,
            translateY
        } = this.state;
        return (
            <HeaderImageScrollView
                maxHeight={MAX_HEIGHT}
                minHeight={MIN_HEIGHT}
                headerImage={require('../../../assets/images/Header_Image.png')}
                scrollEnabled={this.state.scroll}
            >
                <TriggeringView>
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 10,
                            marginBottom: 20,
                            height: height * 0.15,
                            position: "relative",
                            justifyContent: 'space-between',
                        }}
                    >
                        {
                            FoodItems.map((fooditem, key) => <Button key={key} image={fooditem.image} text={fooditem.text}
                                onPress={() =>
                                    this.setState({ active: 0 }, () =>
                                        this.handleSlide(xTabOne)
                                    )
                                } />
                            )
                        }

                        {
                            FoodItems1.map((fooditem, key) => <Button key={key} image={fooditem.image} text={fooditem.text}
                                onPress={() =>
                                    this.setState({ active: 1 }, () =>
                                        this.handleSlide(xTabTwo)
                                    )
                                } />
                            )
                        }

                        {
                            FoodItems2.map((fooditem, key) => <Button key={key} image={fooditem.image} text={fooditem.text}
                                onPress={() =>
                                    this.setState({ active: 2 }, () =>
                                        this.handleSlide(xTabThree)
                                    )
                                } />
                            )
                        }
                    </View>
                    <Animated.View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            transform: [
                                {
                                    translateX: translateXTabOne
                                }
                            ]
                        }}
                        onLayout={event =>
                            this.setState({
                                translateY: event.nativeEvent.layout.height
                            })
                        }
                    >
                        <Hand
                            icon={require('../../../assets/images/emotions.png')}
                            title="Làm chủ cảm xúc"
                            onClick={() => this}
                        />
                    </Animated.View>
                    <Animated.View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            transform: [
                                {
                                    translateX: translateXTabTwo
                                },
                                {
                                    translateY: -translateY
                                }
                            ]
                        }}
                    >
                        <Hand
                            icon={require('../../../assets/images/stress.png')}
                            title="Giải phóng Stress công việc"
                            onClick={() => this}
                        />
                    </Animated.View>

                    <Animated.View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            transform: [
                                {
                                    translateX: translateXTabThree
                                },
                                {
                                    translateY: -2 * translateY
                                }
                            ]
                        }}
                    >
                        <Hand
                            icon={require('../../../assets/images/love.png')}
                            title="Xử lý xung đột quan hệ "
                            onClick={() => this}
                        />
                    </Animated.View>
                </TriggeringView>
            </HeaderImageScrollView>
        );
    }
}
