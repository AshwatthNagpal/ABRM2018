import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class Xyz extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/17.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'WAT SUTHAT'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Wat Suthat, adjacent to the Great Swing,
                         is one of the oldest and mpst beautiful
                        of Bangkok's Buddhist temples. Three kings
                         had a hand in its construction: it was begun soon
                         after the coronation </Text>

                        <Text style={styles.white}>Of Rama I (founder of the Chakridynasty) in 1782,
                        Continud  by Rama II and completed
                        ten years later by Rama III. Apart from its delightful architecture,
                        the temple boasts some exceptionally</Text>

                        <View flexDirection={'row'} >
                            <Text style={styles.yellow}>Hours : </Text>
                            <Text style={styles.white}>8:30am-9:00pm daily</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Admission : </Text>
                            <Text style={styles.white}>20 baht</Text>
                        </View>



                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand : </Text>
                            <Text style={styles.white}>5.5kms</Text>
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