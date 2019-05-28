import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

    Linking,
    TouchableOpacity,

} from 'react-native';

export default class Hotels extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View>
                <ImageBackground
                    style={styles.imgback}
                    source={require('../images/19.png')}>
                    <Myheader title={'HOTELS'}
                        onpress={() => { this.props.navigation.pop() }} />
                    <View
                        style={styles.v}>

                        <Text style={styles.text1}>
                            Amari Watergate Bangkok 847
                            Phetchaburi Rd,Makkasan Khet
                             Ratchathewi, Krung Thep Maha
                             Nakhan 10400,Thailand
                    </Text>

                        <TouchableOpacity
                            onPress={() => { Linking.openURL('https://www.google.com/maps/search/?api=1&query=Amari Watergate Bangkok Phetchaburi Rd,Makkasan Khe Ratchathewi, Krung Thep Maha Nakhan 10400,Thailand') }}
                        >
                            <Text style={styles.text2}> Click here for google map location</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.v}>

                        <Text
                            style={styles.text1}>
                            Centara Grand at CentralWorld 999/99 Rama 1 Road
                            ,Pathumwan,10330,Bangkok, Thailand
                    </Text>

                        <TouchableOpacity
                            onPress={() => { Linking.openURL('https://www.google.com/maps/search/?api=1&query=Centara Grand at CentralWorld 999/99 Rama 1 Road,Pathumwan,10330,Bangkok, Thailand') }}>

                            <Text
                                style={styles.text2}> Click here for google map location</Text>
                        </TouchableOpacity>
                    </View>
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
    v: {
        width: Dimensions.get("window").width - 25,
        height: 200,
        borderColor: '#ffffff',
        borderWidth: 5,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10
    },
    text1: {
        fontSize: 20,
        color: "#ffffff",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center'
    },
    text2: {
        fontSize: 15,
        color: "#faff00",
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center'
    }

})