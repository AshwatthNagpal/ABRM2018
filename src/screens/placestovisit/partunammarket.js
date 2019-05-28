import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class PartunamMarket extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/26.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'PLATINUM FASHION MALL'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Pratunam district is all about clothing,
                        and Pratunam Market, along with Platinum Fashion Mall, is the best place
                         to shop for this kind of products in the area. Huge variety is
                          available in around 4,000 stores at rock bottom prices. </Text>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Opening Hours :</Text>
                            <Text style={styles.white}>24/7</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Location :</Text>
                            <Text style={styles.white1} >869/15 Ratchaprarop Rd, Khwaeng Thanon Phaya Thai, Khet Ratchathewi,
                            Krung Thep Maha Nakhon</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand :</Text>
                            <Text style={styles.white}>500 m</Text>
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
        marginRight: 15
    }

})