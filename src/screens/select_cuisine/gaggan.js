import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class Gaggan extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/loginpic.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'GAGGAN'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Named after the chef himself — Gaggan Anand — the restaurant is set in an impressive white timbered, colonial style mini mansion on Langsuan Road in downtown Bangkok.
There are three dining spaces to choose from; a cozy and intimate nook for four; a main dining room with wooden flooring and high ceilings; or a table for six with a window where you can watch Gaggan cook up his gastronomic wonders right next to you.
 </Text>

                        <Text style={styles.white}>Sample dishes include 'Viagra' — fresh oyster in
                         a spice marinade grilled and served with Kokum ice cream,
                         'Portuguese Connection' Iberian pork sous vide for 24 hours with pickling
                          spices served with a vindaloo curry reduction, and 'Mom's Love' — hot carrot
                          mousse with saffron and 100% silver.</Text>




                        <View flexDirection={'row'} >
                            <Text style={styles.yellow}>Address : </Text>
                            <Text style={styles.white1}>68/1 Soi Langsuan, Ploenchit Road, Lumpini</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand : </Text>
                            <Text style={styles.white}>2.2kms</Text>
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