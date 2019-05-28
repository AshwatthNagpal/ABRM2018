import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class WatArun extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/loginpic.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'WAT ARUN'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Wat Arun is something of a trimphant complex, dating backto ancient battles between
                        the former siam and Burma. Having fallen to the Burmese,Ayuthaya was reduced to rubble and ashes </Text>

                        <Text style={styles.white}>But General Taksin and the remaining survivors vowed to march "until the sun
                        rose again" and to build a temple there. Sunset is really the time to take in this place in all its glory;</Text>

                        <View flexDirection={'row'} >
                            <Text style={styles.yellow}>Hours : </Text>
                            <Text style={styles.white}>8:30am-5:30pm daily</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Admission : </Text>
                            <Text style={styles.white}>20 baht</Text>
                        </View>

                        <View flexDirection={'row'} >
                            <Text style={styles.yellow}>Address : </Text>
                            <Text style={styles.white1}  >158 Wang Doem Road | Wat Arun,
                            Bang KoK Yai</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand : </Text>
                            <Text style={styles.white}>5kms</Text>
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