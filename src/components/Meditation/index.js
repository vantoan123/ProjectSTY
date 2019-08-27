
import React, { Component } from 'react'
import { Alert, Text, TouchableHighlight, View, Image, } from 'react-native'
import * as Progress from 'react-native-progress';
import NotificatableTimer from './notification-timer';
import styles from './styles';
import { images } from '../../utils/images';

const FPS = 60
function zeroPadding(n) {
    return ('0' + n.toString()).slice(-2)
}
const MAX_POINTS = 500;

export default class Meditation extends Component {
    constructor(props) {
        super(props)

        this.total = 20 * 1000
        this.timer = new NotificatableTimer({
            total: this.total,
            terminaterCallback: () => {
                // Alert.alert('title', 'message')
            },
            notifications: [
                {
                    at: 1000,
                    callback: () => {
                        Alert.alert('Thông báo', 'chúc mừng bạn đã hoàn thành bài tập ')
                    }
                },
            ],
            animation: {
                interval: 1000 / FPS,
                callback: (duration, total) => {
                    const progress = duration / total
                    this.setState({
                        progress
                    })
                }
            },
        })

        this.state = {
            running: false,
            progress: 0,
            isMoving: false,
        }
    }

    formatProgress(progress) {
        const remaining = (this.total * (1 - progress)) / 1000
        const remainingMinutes = Math.floor(remaining / 60)
        const remainingSeconds = Math.floor(remaining % 60)
        return zeroPadding(remainingMinutes) + ':' + zeroPadding(remainingSeconds)
    }
    get btnText() {
        return this.state.running ? 'stop' : 'start'
    }

    get circleColor() {
        return this.state.running ? '#73E6E6' : '#5db7e8'
    }
    get timerTextColor() {
        return this.state.running ? '#eee' : '#eee'
    }
    render() {
        const fill = this.state.points / MAX_POINTS * 100;
        return (
            <View style={styles.container}>
                <Text style={{ color: 'white', marginTop: 30, fontSize: 25 }}>Tìm lại bình an</Text>
                <View style={styles.timerView}>
                    <Text style={styles.icon}><Image source={images.flower} size={40} color={this.timerTextColor} /></Text>
                    <Progress.Circle
                        size={220}
                        progress={this.state.progress}
                        unfilledColor={this.circleColor}
                        color={'#2E2E4D'}
                        thickness={5}
                        showsText={true}
                        formatText={(progress) => this.formatProgress(progress)}
                        textStyle={[styles.timerText, { color: this.timerTextColor }]}
                    />
                </View>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <TouchableHighlight style={{ borderRadius: 50, backgroundColor: '#6CCFCC', width: 150, height: 40, justifyContent: 'center', alignItems: 'center' }} onPress={() => {
                            this.timer.reset()
                            this.setState({
                                progress: 0
                            })
                        }}>
                            <Text style={[styles.reset, { backgroundColor: this.resetBtnColor, }]}>Reset</Text>
                        </TouchableHighlight>
            
                        <TouchableHighlight style={{ borderRadius: 50, backgroundColor: '#6CCFCC', width: 150, height: 40, justifyContent: 'center', alignItems: 'center' }} onPress={() => {
                            this.timer.toggle()
                            this.setState({
                                running: !this.state.running
                            })
                        }}>
                            <Text style={[styles.stop, { backgroundColor: this.btnColor }]}>{this.btnText}</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}
