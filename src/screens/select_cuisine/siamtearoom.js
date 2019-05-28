import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class SiamTeaRoom extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/31.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'SIAM TEA ROOM'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>With its delightful comingling of Thai and Western styles,
                         this deli-inspired outlet spans the culinary divide with freshly-baked pastries,
                         authentic Thai cuisine and a splendid afternoon tea service featuring fine-grade
                         tea leaves sourced from the hills of Northern Thailand. A welcoming area with comfy
                          sofas, this is the ideal spot for a swift yet supremely satisfying lunch.</Text>

                        <View flexDirection={'row'} >
                            <Text style={styles.yellow}>Address : </Text>
                            <Text style={styles.white1}>199 Soi Sukhumvit 22, Khlong Toei, Khet Khlong Toei, Krung Thep Maha Nakhon 10110, Thailand</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand : </Text>
                            <Text style={styles.white}>25 min/ 6.7 km</Text>
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