import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class CentralWorldBangkok extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/28.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'CENTRAL WORLD BANGKOK'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Central World is the third largest in Asia and sixth
                         in the world. With more than 500 stores, 100 restaurants and cafes,
                         this 7-floor complex is a place you wouldn't want to miss if you are to
                          go shopping in Bangkok </Text>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Opening Hours :</Text>
                            <Text style={styles.white}>Daily 10:00 to 22:00</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Location :</Text>
                            <Text style={styles.white1}>999/9 Rama I Rd, Khwaeng Pathum Wan, Khet Pathum Wan, Krung Thep Maha Nakhon</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand :</Text>
                            <Text style={styles.white}>2.5kms</Text>
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
    white1: {
        fontSize: 15,
        color: '#ffffff',
        marginTop: 10,
        marginBottom: 10,
        width: 300
    },
    white: {
        fontSize: 15,
        color: '#ffffff',
        marginTop: 10,
        marginBottom: 10,


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