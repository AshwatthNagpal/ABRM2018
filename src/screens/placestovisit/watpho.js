import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class WatPho extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/21.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'WAT PHO'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Loacted immediately south of the grand Palace precinct
                        , Wat Pho makes an excellent addition to your tour, provided your feel are up for more
                        walking. It has long been considered a place ofhealing. You can get a Thai or foot massage
                        at the tradition medical school on the premises. </Text>

                        <Text style={styles.white}>Today Wat Pho is best known for the Temple ofthe Reclining Buddha, where you'll
                        find a statue so big (45 m long and 15 m high), it cannot be viewed in its entirety only appreciated
                        in sections. </Text>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Hours :</Text>
                            <Text style={styles.white}>8:30am-6pm daily</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Admission :</Text>
                            <Text style={styles.white}>100 baht</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand :</Text>
                            <Text style={styles.white}>16.9 kms</Text>
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