import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
} from 'react-native';
import Myheader from '../component/MyHeader';
import AnalogClock from '../component/analogclock';
export default class WorldClock extends Component {
    static navigationOptions = {
        headerTitle: 'CLOCK',
        headerTitleStyle: {
            width: Dimensions.get('window').width - 130,
            height: 40,
            textAlign: 'center',
            fontSize: 24,
            textAlignVertical: 'center',
            alignSelf: 'center'
        },
        headerStyle: {
            height: 60
        }

    }
    render() {

        return (
            <View style={styles.container}>
                <View flexDirection={'row'} justifyContent={'center'}>

                    <View style={styles.clock}>
                        <AnalogClock
                            place={'TOKYO'}
                            hour={9}
                            minutes={1}
                            sec={0}
                            minuteHandLength={60}
                            secondHandLength={50}
                            hourHandLength={40}
                            minuteHandWidth={2}
                            secondHandWidth={1}
                            hourHandWidth={2}
                            clockBorderWidth={2}
                            clockSize={130}
                        />
                    </View>

                    <View style={styles.clock}>
                        <AnalogClock
                            place={'INDIA'}
                            hour={5}
                            minutes={30}
                            sec={0}
                            minuteHandLength={60}
                            secondHandLength={50}
                            hourHandLength={40}
                            minuteHandWidth={2}
                            secondHandWidth={1}
                            hourHandWidth={2}
                            clockBorderWidth={2}
                            clockSize={130}
                        />
                    </View>

                </View>

                <View flexDirection={'row'} justifyContent={'center'}>

                    <View style={styles.clock}>
                        <AnalogClock
                            place={'NEW YORK'}
                            hour={-4}
                            minutes={1}
                            sec={0}
                            minuteHandLength={60}
                            secondHandLength={50}
                            hourHandLength={40}
                            minuteHandWidth={2}
                            secondHandWidth={1}
                            hourHandWidth={2}
                            clockBorderWidth={2}
                            clockSize={130}
                        />
                    </View>

                    <View style={styles.clock}>
                        <AnalogClock
                            place={'BANGKOK'}
                            hour={7}
                            minutes={1}
                            sec={0}
                            minuteHandLength={60}
                            secondHandLength={50}
                            hourHandLength={40}
                            minuteHandWidth={2}
                            secondHandWidth={1}
                            hourHandWidth={2}
                            clockBorderWidth={2}
                            clockSize={130}
                        />
                    </View>
                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    clock: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center'
    },
    container: {
        backgroundColor: '#ffffff',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }

})