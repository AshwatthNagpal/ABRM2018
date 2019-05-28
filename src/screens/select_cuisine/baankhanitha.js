import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class BaanKhanitha extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/32.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'BAAN KHANITHA'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Consistently ranked among the best Thai restaurant in Bangkok for two decades, and selected as one of the best authentic Thai restaurant by Michelin Guide 2018,

Baan Khanitha serves best authentic Thai cuisine prepared award-winning recipes with a focus on delicate flavor and fresh premium organic ingredients right from our very own Baan Panalai Organic Farm. Regardless of whichever venues you select, Baan Khanitha serves sophisticated family style home cooking in a cozy and elegant atmospheres to ensure Our home is your home.
 </Text>

                        <View flexDirection={'row'} >
                            <Text style={styles.yellow}>Address : </Text>
                            <Text style={styles.white1}>31 Sukhumvit 53 Alley, Khwaeng Khlong Tan Nuea, Khet Watthana, 
                            Krung Thep Maha Nakhon 10110, Thailand
</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand : </Text>
                            <Text style={styles.white}>17 min/ 4.1 km</Text>
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