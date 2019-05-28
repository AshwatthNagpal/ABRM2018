import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class VictoryMonumentMarket extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/27.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'VICTORY MONUMENT MARKET'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Victory Monument is a good choice for budget
                        shopping in Bangkok because it offers shoppers many shopping options
                         in malls, in street market and in small stores along road alleys.
                          Century the Movie Plaza,Victory Point and Ratchathewi Soi 3 to 9
                           are places to find the best bargains in this shopping area.</Text>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Opening Hours :</Text>
                            <Text style={styles.white}>10:00 to 22:00</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Location :</Text>
                            <Text style={styles.white}>Thanon Phaya Thai, Ratchathewi</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand :</Text>
                            <Text style={styles.white}>2.5 kms</Text>
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