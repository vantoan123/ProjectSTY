import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get('window');

export default class SquareTab extends React.Component {

    render() {
        const { image, text, onPress } = this.props;
        return (
            <View
                style={{
                    marginTop: 10,
                    width: width * 0.3,
                    height: height * 0.15,
                    marginBottom: 10,
                    borderRadius: 10,
                    backgroundColor: '#2E2E4D'
                }}
            >
            <TouchableOpacity style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#c5c5c5',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'}} onPress={onPress}>
            
                    <View>
                        <Image source={image} style={{
                            width: 23.95,
                            height: 24 }} />
                    </View>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '600',
                        color: 'white' }}>
                        {text}
                    </Text>
               
            </TouchableOpacity>
            </View>
        );
    }
}
