import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class Maya extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/31.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'MAYA'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Bangkok’s unique rooftop dining and entertainment destination,
                        Maya Restaurant and Bar, welcomed onto the culinary scene in July 2013.
                        But its newfound success has not been sudden. The Maya tale has taken many years,
                        thoughts and inspirations to create.
                         Fico Corporation Co., Ltd. the owning company of Holiday Inn Bangkok Sukhumvit
                          had a vision. Khun Krit Srichawla, CEO of Fico, owner of some of the best European
                           dining spots in Thailand’s capital including Medici Kitchen and Bar, Nest Rooftop Lounge,
                            he wanted to finally pay homage to his Indian roots – but in a unique and memorable way.
                            </Text>

                        <View flexDirection={'row'} >
                            <Text style={styles.yellow}>Address : </Text>
                            <Text style={styles.white1}>Holiday Inn,Level 29 Sukhumvit Soi 11
</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand : </Text>
                            <Text style={styles.white}>7.3 kms</Text>
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