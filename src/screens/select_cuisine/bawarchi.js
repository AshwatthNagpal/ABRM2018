import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class Bawarchi extends Component {
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
                        title={'BAWARCHI'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Only the best quality and most authentic
                        Indian cooking ingredients are sourced direct from India by this
                        award winning restaurant, and everything is cooked to perfection by
                         a team of dedicated and talented master chefs.</Text>

                        <Text style={styles.white}>Inspired by Mughlai cuisine from Northern India
                        , Bawarchi prides itself on a traditional style of cooking, using a
                        tandoor clay oven to turn breads, meat, fish and poultry into luscious
                        aromatic curries, Biryanis, Kebabs, and Tikkas, plus delectable vegetarian dishes.</Text>

                        <Text style={styles.white}>The restaurant's elegant and exotic contemporary
                        interior makes the perfect backdrop to the innovative menu featuring a
                         range of beautifully presented recipes with surprising and original twists
                         on old favorites.</Text>




                        <View flexDirection={'row'} >
                            <Text style={styles.yellow}>Address : </Text>
                            <Text style={styles.white1}>Intercontinental Hotel, President Tower, 973 Ploenchit Road</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand : </Text>
                            <Text style={styles.white}>500 m</Text>
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