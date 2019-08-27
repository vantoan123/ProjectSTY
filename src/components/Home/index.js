import React, { Component } from "react";
import { connect } from 'react-redux';
import { View, Image,} from 'react-native';
import styles from './styles';
import TabNavigator from 'react-native-tab-navigator';
import { images } from '../../utils/images';
import OverView from '../OverView/index';
import Expert from '../Expert/index';
import Meditation from '../Meditation/index';
import MeditationLeads from '../MeditionLeads/index';
import Individual from '../Individual/index';
class Index extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectedTab: 'overView'
  };
  render() {
    const { userType } = this.props;
    return (
      <TabNavigator style={styles.container} >
        <TabNavigator.Item
          selected={this.state.selectedTab === 'overView'}
          title="Tổng quan"
          selectedTitleStyle={{ color: "#3496f0" }}
          renderIcon={() => <Image style={styles.picture} source={images.iconHome} />}
          renderSelectedIcon={() => <Image style={styles.picture} source={images.iconHomeActive} />}
          onPress={() => this.setState({ selectedTab: 'overView' })}
        >
          <OverView/>
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'thien co dan'}
          title="Thiền có dẫn"
          selectedTitleStyle={{ color: "#3496f0" }}
          renderIcon={() => <Image style={styles.picture} source={images.iconMeditationLead} />}
          renderSelectedIcon={() => <Image style={styles.picture} source={images.iconMeditationLeadActive} />}
          onPress={() => this.setState({ selectedTab: 'thien co dan' })}>
          <MeditationLeads />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'thien tinh tam'}
          title="Thiền tĩnh tâm"
          selectedTitleStyle={{ color: "#3496f0" }}
          renderIcon={() => <Image style={styles.picture} source={images.iconMeditation} />}
          renderSelectedIcon={() => <Image style={styles.picture} source={images.iconMeditationActive} />}
          onPress={() => this.setState({ selectedTab: 'thien tinh tam' })}
        >
          <Meditation />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'ca nhan'}
          title="Chuyên gia"
          selectedTitleStyle={{ color: "#3496f0" }}
          renderIcon={() => <Image style={styles.picture} source={images.iconExpert} />}
          renderSelectedIcon={() => <Image style={styles.picture} source={images.iconExpertActive} />}
          onPress={() => this.setState({ selectedTab: 'ca nhan' })}>
          <Expert/>
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'chuyen gia'}
          title="Cá nhân"
          selectedTitleStyle={{ color: "#3496f0" }}
          renderIcon={() => <Image style={styles.picture} source={images.iconIndividual} />}
          renderSelectedIcon={() => <Image style={styles.picture} source={images.iconIndividualActive} />}
          onPress={() => this.setState({ selectedTab: 'chuyen gia' })}>
          <Individual />
        </TabNavigator.Item>

      </TabNavigator>
    );
  }
}
const mapStateToProps = state => ({
  userType: state.auth.userType,
});
export default connect(mapStateToProps, {
})(Index);
