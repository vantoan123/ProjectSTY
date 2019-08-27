import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
export default class Item extends React.Component {
    constructor(props){
        super(props)
    }
    onPlay() {
        this.props.navigation.navigate('Play');
    }
    render() {
        const { name, title, time, image, imagePlay,onPress } = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={styles.container} >
                <View style={styles.nameTitle}>
                    <Text style={styles.name}>
                        {name}
                    </Text>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.timeImage}>
                        <Image source={image} style={styles.image} />
                        <Text style={styles.time}>
                            {time}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Image source={imagePlay} style={styles.imagePlay} />
            </TouchableOpacity>
        )
    }
}
