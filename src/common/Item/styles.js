import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default{
    container: {
        flexDirection: 'row',
        backgroundColor: '#2E2E4D',
        width: width * 0.9,
        height: height * 0.09,
        borderRadius: 10,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding:5,
    },
    nameTitle: {
        flex: 6,
        flexDirection: 'column',
        paddingVertical: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#eee'
    },
    title: {
        fontSize: 11,
        color: '#eee'
    },
    timeImage: {
        flexDirection: 'row',
        marginTop: height*0.01
    },
    image: {
        height: 12,
        width: 9.82,
    },
    time: {
        color: '#eee',
        fontSize: 10
    },
    imagePlay: {
        height: 32,
        width: 32,
        marginTop: height*0.001
    },
}
