import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class Govinda extends Component {
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
                        title={'GOVINDA'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Govinda's Italian Restaurant and Pizzeria, The 
                        Vegetarian and Vegan Italian experience. It was established in the year 1997 
                        and is voted to be Asia's Top 10 Vegetarian restaurants. With many awards and 
                        recognition, Govinda's is one of the most successful vegetarian restaurants
                         in Thailand.
                         At Govinda's, our combination of fresh ingredients with authentic Italian cooking
                          adds up to a world class dinning experience that you will always remember. 
                          We only use the freshest and finest ingredients to highlight the exquisite
                           flavors of each dish. We also provide selected Gluten free options menu for
                            weekdays. Govinda's is the perfect place to go for a delicious Vegetarian and
                             Vegan meal with friends, family or colleagues.</Text>

                        <View flexDirection={'row'} >
                            <Text style={styles.yellow}>Address : </Text>
                            <Text style={styles.white1}>6/5-6 Soi Sukhumvit 22, Khlong Tan, Khet Khlong Toei, Thailand</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand : </Text>
                            <Text style={styles.white}>7 kms</Text>
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