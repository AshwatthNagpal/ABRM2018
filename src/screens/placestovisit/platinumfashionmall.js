import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class PlatinumFashionMall extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/25.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'PLATINUM FASHION MALL'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Right in the center of Pratunam is the Platinum Fashion Mall,
                         home to 2500 shops. The mall is where savvy shoppers come to buy fashion clothes and
                         accessories at wholesale prices. You can get mix and match fashion items at prices that
                          are 10-30% less of the original prices at many shops. </Text>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Opening Hours :</Text>
                            <Text style={styles.white}>Daily 09:00-20:00</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Location :</Text>
                            <Text style={styles.white1}>222 Petchburi Road, Ratchathevee, Bangkok 10400, Thailand</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand :</Text>
                            <Text style={styles.white}>550 m</Text>
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