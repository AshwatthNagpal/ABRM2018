import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class Charcoal extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/33.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'CHARCOAL'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Expect buffet and a la carte dining at its best here at The Great Kabab factory in Sukhumvit. This is an Indian specialty restaurant which offers a unique dining experience, and recipes which combine the ancient with the contemporary.
The very best bit though is that this is an 'all you can eat' kind of restaurant, so if you take a particular fancy to a tasty fried fish and pineapple skewer, rose petal flavoured cottage cheese, fennel-flavoured naan, or curried prawn biryani with star anise and mustard seeds, you can ask for more.</Text>






                        <View flexDirection={'row'} >
                            <Text style={styles.yellow}>Address : </Text>
                            <Text style={styles.white1}>Majestic Grande, Sukhumvit Soi 2</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand : </Text>
                            <Text style={styles.white}>3.1 kms</Text>
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