import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text,Button,Dimensions} from 'react-native';
import { images } from '../../utils';
import styles from './styles';
import { Dialog } from 'react-native-simple-dialogs';
export default class BuyVip extends Component {
    state = {}
    openDialog = (show) => {
        this.setState({ showDialog: show });
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={ () => this.openDialog(true) }>
                    <View style={styles.image}>
                        <Image source={images.iconDiamond} />
                    </View>
                    <View style={styles.name}>
                        <Text style={styles.title1}>
                            Đăng ký gói trả phí
                        </Text>
                        <Text style={styles.title2}>
                            Để truy cập nội dung không giới hạn
                        </Text>
                    </View>
                </TouchableOpacity>
                <Dialog
                    visible={ this.state.showDialog }
                    title="Đăng ký gói trả phí"
                    onTouchOutside={ () => this.openConfirm(false) }
                    >
                    <Text style={ { marginVertical: 30, marginHorizontal:60 } }>
                            Hệ thống đang cập nhật
                    </Text>
                    <Button
                        onPress={ () => this.openDialog(false) }
                        style={ { marginTop: 10 } }
                        title="CLOSE"
                    />
                </Dialog>
            </View>
        );
    }
}
