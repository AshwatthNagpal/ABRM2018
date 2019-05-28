import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class CuisineUnplugged extends Component {
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
                        title={'CUISINE UNPLUGGED'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Savour the best hotel buffet in Bangkok at Cuisine Unplugged.
                        Renowned as one of Bangkok's most popular hotel buffet restaurants, Cuisine Unplugged
                        features an Active Breakfast covering four themes of Age Defense, Energy Boost, Balance
                        and Detox to ensure you start the day right, an International Lunch and spectacular themed
                        seafood buffet dinner 7 days a week. Cuisine Unplugged also offers diners A la la Carte
                        Menu offering both International flavours and local flair.</Text>

                        <View flexDirection={'row'} >
                            <Text style={styles.yellow}>Address : </Text>
                            <Text style={styles.white1}>Pullman Bangkok King Power, 8/2 Rangnam Rd, Thanon Phayathai, Thanon-Phayathai, Ratchathewi, Bangkok 10400, Thailand</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand : </Text>
                            <Text style={styles.white}>2.2 kms</Text>
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