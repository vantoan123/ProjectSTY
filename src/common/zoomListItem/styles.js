import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
export default {
    container: {
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 16,
        marginTop: 16,
    },
    top: {
        marginTop: 10,
        backgroundColor: '#FFF',
        alignItems: 'center',
        borderRadius: 5,
    },
    backButton: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: height * 0.02,
        left: width * 0.9
    },
    title: {
        color: "#000",
        marginLeft: 10,
        fontSize: 19,
        top: 4
    },
    listView: {
        flex: 3,
        flexDirection: 'column',
        borderRadius: 2,
    },
    scrollView: {
        paddingTop: 4,
    },
}
