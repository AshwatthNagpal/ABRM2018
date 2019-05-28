import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    Dimensions,
    Text,
    View,
    Alert,
    TouchableWithoutFeedback,
    BackHandler,
    ActivityIndicator,
    ToastAndroid
} from 'react-native';

export default class TravelDetails extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View>
                <ImageBackground style={styles.imgback}
                    source={require('../images/loginpic.png')}>
                    <Myheader title={'ARRIVALS/DEPARTURES'}
                        onpress={() => { this.props.navigation.pop() }} />
                    <View style={styles.view1}>
                        <Text
                            style={styles.yellow}>
                            Arrivals
               </Text>
                        <Text
                            style={styles.white}>
                            i. The immigration at Bangkok airport is at Level 2.
                       </Text>
                        <Text
                            style={styles.white}>
                            ii. Post Immigartion you are advised to meet our travel partner at level 1.
                        </Text>
                        <Text
                            style={styles.white}>
                            iii. The travel partner shall guide you further to the buses.
                    </Text>
                        <Text
                            style={styles.yellow}>
                            Departures
               </Text>
                        <Text
                            style={styles.white}>
                            i. The buses shall leave the hotel 5 hours prior to the fight schedule
               </Text>
                    </View>
                    <View alignItems={'center'}>

                        <TouchableWithoutFeedback
                            onPress={() => { this.props.navigation.navigate('tobangkok') }}>
                            <View style={styles.v}>
                                <Text style={styles.tex}>
                                    TO BANGKOK
                                 </Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback
                            onPress={() => { this.props.navigation.navigate('frombangkok') }}>
                            <View style={styles.v}>
                                <Text style={styles.tex}>
                                    FROM BANGKOK
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>

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
    tex: {
        fontSize: 20,
        color: "#ffffff",
        textAlign: 'center',
        width: 200,
        height: 40,
        alignSelf: 'center',
        textAlignVertical: 'center'
    },
    white: {
        fontSize: 15,
        color: '#ffffff'
    },
    yellow: {
        fontSize: 15,
        color: '#ffe900'
    },
    v: {
        borderColor: '#ffffff',
        borderWidth: 1.5,
        marginTop: 10,
        marginBottom: 10,
        width: Dimensions.get('window').width - 20,
        height: 40,

    },
    view1: {
        marginLeft: 18,
        marginRight: 18,
        marginTop: 10,
        marginBottom: 10
    }
}
)