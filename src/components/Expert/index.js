import React, { Component } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Header } from 'react-navigation';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import tvShowContent from '../../../assets/tvShowContent';
import styles from './styles';
const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = 250;
class TvShow extends Component {
    constructor() {
        super();
        this.state = { showNavTitle: false };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" />
                <HeaderImageScrollView
                    maxHeight={MAX_HEIGHT}
                    minHeight={MIN_HEIGHT}
                    maxOverlayOpacity={0.6}
                    minOverlayOpacity={0.3}
                    fadeOutForeground
                    renderHeader={() => <Image source={tvShowContent.image} style={styles.image} />}
                    renderFixedForeground={() => (
                        <Animatable.View
                            style={styles.navTitleView}
                            ref={navTitleView => {
                                this.navTitleView = navTitleView;
                            }}
                        >
                        </Animatable.View>
                    )}
                    renderForeground={() => (
                        <View style={styles.titleContainer}>
                            <Text style={styles.imageTitle}>{tvShowContent.title}</Text>
                        </View>
                    )}
                >
                    <TriggeringView
                        onHide={() => this.navTitleView.fadeInUp(200)}
                        onDisplay={() => this.navTitleView.fadeOut(100)}
                    >
                    </TriggeringView>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Overview</Text>
                        <Text style={styles.sectionContent}>{tvShowContent.overview}</Text>
                    </View>
                </HeaderImageScrollView>
            </View>
        );
    }
}
export default TvShow;
