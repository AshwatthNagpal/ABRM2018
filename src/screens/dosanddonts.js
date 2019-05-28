import React, { Component } from 'react';
import {

    StyleSheet,
    TouchableOpacity,

    ImageBackground,
    Dimensions,
    Text,
    View,
    Image,

} from 'react-native';
import Myheader from '../component/MyHeader'
export default class DosAndDonts extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View>
                <ImageBackground style={styles.imgbck} source={require('../images/12.png')}>
                    <Myheader title={"DO'S and DONT'S"}
                        onpress={() => this.props.navigation.pop()} />

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('dos') }}>
                        <Image style={styles.img} source={require('../images/icons/DOS.png')} />
                    </TouchableOpacity>

                    <Text style={styles.text}>DO'S</Text>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('donts') }}>
                        <Image style={styles.img} source={require('../images/icons/DONTS.png')} />
                    </TouchableOpacity>

                    <Text style={styles.text}>DONT'S</Text>

                </ImageBackground>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    imgbck: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        alignItems: 'center'
    },
    img: {
        width: 80,
        height: 80,
        marginBottom: 5,
        marginTop: 20
    },
    text: {
        fontSize: 15,
        color: '#ffffff',
        marginTop: 4,
        marginBottom: 4
    }
})