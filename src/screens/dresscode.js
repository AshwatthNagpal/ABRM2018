import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import Myheader from '../component/MyHeader';

export default class DressCode extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (

            <ImageBackground style={styles.imgbck} source={require('../images/dresscode.jpg')}>
                <Myheader title={'DRESS CODE'} onpress={() => this.props.navigation.pop()} />

            </ImageBackground>


        );
    }
}

const styles = StyleSheet.create({
    imgbck: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    img: {
        width: Dimensions.get('window').width,
        height: Dimensions.get("window").height - 60
    }

})