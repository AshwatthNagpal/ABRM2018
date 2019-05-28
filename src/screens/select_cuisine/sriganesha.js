import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class SriGanesha extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/32.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'SRI GANESHA'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Sri Ganesha is veggie heaven!
                        Describing itself as a 'pure, homely and authentic south Indian
                        vegetarian restaurant', this unassuming little eatery certainly
                        isn't fancy, but it serves up unusual and exciting southern Indian
                         gastronomy from within its four walls. Food is served simply on
                         no-frills stainless steel canteen style dishes, leaving the spicy
                          taste sensations to speak for themselves.All dishes are freshly
                           prepared with exquisite ingredients to enhance the delectable
                           Indian flavours and ensure the food is as high quality is possible.
                            And all this at a very affordable price.
                          </Text>

                        <View flexDirection={'row'} >
                            <Text style={styles.yellow}>Address : </Text>
                            <Text style={styles.white1}>19/13-14 Sukhumvit Suites, Sukhumvit Soi 13</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand : </Text>
                            <Text style={styles.white}>3.1 kms</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    imgback: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    white: {
        fontSize: 15,
        color: '#ffffff',
        marginTop: 10,
        marginBottom: 10,

    },
    white1: {
        fontSize: 15,
        color: '#ffffff',
        marginTop: 10,
        marginBottom: 10,
        width: 300
    },
    yellow: {
        fontSize: 15,
        color: '#ffee00',
        marginTop: 10,
        marginBottom: 10,


    },
    back: {
        marginLeft: 15,
        marginRight: 15,

    }

})