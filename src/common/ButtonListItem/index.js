import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image,ScrollView } from 'react-native';
import * as ButtonData from '../../constants/buttonData';
import { changeReport } from './actions';
import {images} from '../../utils/images';
import styles from './styles';
const img1 = images.iconEmotions;
const img2 = images.iconStress;
const img3 = images.iconLove;

class Index extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(reasonId, reasonContent) {
        this.props.changeReport(reasonId, reasonContent);
    }
    
    render() {
        const dataParent = ButtonData.buttonsData.filter(data => {
            return data.parentId === 0;
        });
        const srcArr = [img1, img2, img3];
        return (
            <View style={styles.content}>
                {
                    dataParent.map((data, index) => {
                        return (
                            <ButtonCenter
                                key={index}
                                id={data.id}
                                name={data.name}
                                changeReport={this.onClick}
                                src={srcArr[index + 0]}
                            />
                        )
                    })
                }
            </View>
        );
    }

}
const ButtonCenter = props => (
    <View style={styles.item}>
        <TouchableOpacity style={styles.buttonCenter} onPress={() => { props.changeReport(props.id, props.name); }}>
            <Image style={styles.img} resizeMode='contain' source={props.src} />
            <Text style={styles.txt}>
                {props.name}
            </Text>
        </TouchableOpacity>
    </View>
);

const mapStateToProps = state => ({
});
export default connect(
    mapStateToProps,
    {
        changeReport
    }
)(Index);
