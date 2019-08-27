import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const TrackDetails = ({
  title,
  artist,
  onTitlePress,
  onArtistPress,
}) => (
    <View style={styles.container}>
      <View style={styles.detailsWrapper}>
        <Text style={styles.title} onPress={onTitlePress}>{title}</Text>
        <Text style={styles.artist} onPress={onArtistPress}>{artist}</Text>
      </View>
    </View>
  );
export default TrackDetails;
const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  artist: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    marginTop: 4,
  },
});
