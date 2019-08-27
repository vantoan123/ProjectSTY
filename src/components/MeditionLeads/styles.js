import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
    welcome: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtWelcome: {
        fontSize: 18,
        fontWeight: '600'
    },
    content: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 10
    },
    content1: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    contentAdd: {
        flex: 0.7,
        marginTop: 20
    },
    footer: {
        flex: 0.15,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#5cb85c'
    },
    InputComment: {
        paddingLeft: 10,
        flex: 1,
        fontSize: 14
    },
    vButton: {
        flex: 0.5,
    },
    item: {
        marginTop: 10,
        width: width * 0.3,
        height: height * 0.15,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#2E2E4D'
    },

    // sheet report
    buttonCenter: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#c5c5c5',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 23.95,
        height: 24
    },
    txt: {
        fontSize: 12,
        fontWeight: '600',
        color: 'white'
    },

}
