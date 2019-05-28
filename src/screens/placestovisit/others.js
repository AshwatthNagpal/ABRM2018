import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class Other extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/29.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'OTHERS PLACES TO SHOP'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <Text style={styles.text}>SIAM PARAGON</Text>
                    <Text style={styles.text}>BIG C</Text>
                    <Text style={styles.text}>PALLADIUM SQUARE</Text>
                    <Text style={styles.text}>MBK MALL</Text>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    imgback: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    },
    text: {
        fontSize: 17,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 10,
        width: 200,
        marginBottom: 10,
        alignSelf: 'center',
        textAlign: 'center'
    },

})