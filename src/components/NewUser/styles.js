import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default {
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
    content: {
      flex: 0.5,
      flexDirection: 'row',
    },
    logoContainer: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop:10,
    },
    logo: {
        flex: 0.6,
        alignSelf: 'center',
    },
    contentWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    margintopButton:{
        marginTop:10
    }
};
