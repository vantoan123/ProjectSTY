import {  Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default{
    container:{
        alignItems: 'center', 
    },
    button:{
        flexDirection: 'row',
        marginTop: 20,
        width: width * 0.93,
        height: height * 0.1,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#6CCFCC',
    },
    image:{
        justifyContent: 'center'
    },
    name:{
        marginLeft: 10,
        justifyContent: 'center',
    },
    title1:{
        fontWeight: 'bold',
        fontSize: 17,
        color: '#eee',
    },
    title2:{
        color: '#eee',
    },
}
