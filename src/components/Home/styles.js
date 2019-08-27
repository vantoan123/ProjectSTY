const React = require('react-native');

const { Dimensions, Platform } = React;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const topHeight = (Platform.OS === 'ios') ? 95 : 75;
const bottomHeight = 50;
const bodyHeight = deviceHeight - (bottomHeight + topHeight);

export default {
  container: {
    backgroundColor:'#1B1B26'
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
    backgroundColor: '#FFF',
    flexDirection: 'column',
  },
  contentRowFirst: {
    flex: 0.3,
    flexDirection: 'column',
  },
  contentHeader: {
    flexDirection: 'row',
    flex: 0.5,
  },
  contentRowSeconds: {
    flex: 0.35,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  contentRowThirds: {
    flex: 0.35,
    flexDirection: 'row',
  },
  contentItem: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  itemText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: (deviceWidth > 320) ? 16 : 14,
    paddingTop: 8,
    textAlign: 'center',
  },
  icon: {
    width: 86,
    height: 86,
  },
  iconSmall: {
    width: 72,
    height: 72,
  },
};
