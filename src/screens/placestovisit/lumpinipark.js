import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class LumpiniPark extends Component {
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
                        title={'LUMPINI PARK'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Lumpini Park provides visitors with a green oasis amidst the
                        traffic and chaos of Bangkok.
                         Hang out on one of several lawn areas, enjoy the shade of a Chinese pagoda,
                          or take a boat out on the lake. Lumpini Park is a great place to spend an afternoon
                          enjoying the contrast of the tranquil park with the skyscrapers rising all around it.
                            Note that the park has been the site of anti-government protests that have
                            occasionally turned violent in the past,
                            so be sure to check on the current status before visiting.
                          </Text>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Hours :</Text>
                            <Text style={styles.white}>5am-9am</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Admission :</Text>
                            <Text style={styles.white}>Free</Text>
                        </View>

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