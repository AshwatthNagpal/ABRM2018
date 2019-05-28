import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class ChatuchakMarket extends Component {
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
                        title={'NATIONAL MUSEUM'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Bangkok's sprawling weekend market is the largest in the world.
                         Here shoppers find everything from jewelry and religious icons to animals and delicious
                         street foods. There are 15,000 stalls, offering just about anything you can dream up.
                         This is a great place to mingle with locals and immerse yourself in everyday Thai life,
                          so arrive early and clear your schedule for the rest of the day if you want to do this
                          place justice. </Text>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand :</Text>
                            <Text style={styles.white}>13kms</Text>
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