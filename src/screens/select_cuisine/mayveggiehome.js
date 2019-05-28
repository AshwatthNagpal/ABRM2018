import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class MayVeggieHome extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/33.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'BAAN KHANITHA'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>May Veggie Home is a 100% Vegan Cuisine. Established in 2013 at Sukhumvit 55 (Thonglor) and moved to Asoke(Near Termainal 21) in 2014.
We serve “Fresh Homemade Food” with quality materials and ingredients and also serve Homemade Vegan Bakery and Vegan Ice Cream to complete your pleasure meal.</Text>

                        <View flexDirection={'row'} >
                            <Text style={styles.yellow}>Address : </Text>
                            <Text style={styles.white1}>8/3 Soi 16 Ratchadapisek Road - Asoke Sukhumvit</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand : </Text>
                            <Text style={styles.white}>6.4 kms</Text>
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