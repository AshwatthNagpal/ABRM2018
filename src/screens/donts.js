import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    ScrollView,
    Text,
    View,
} from 'react-native';
import Myheader from '../component/MyHeader'
export default class Donts extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View>
                <ImageBackground style={styles.imgbck} source={require('../images/12.png')}>
                    <Myheader title={"DONT'S"} onpress={() => { this.props.navigation.pop() }} />
                    <ScrollView>
                        <View >
                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>1.</Text>
                                <Text style={styles.text1}>Do not ever show disrespect towards a royal family as they have deep reverence for a royal family, failing or deliberately failing to  show some respect towards the king or the monarchy in any situation where it is expected, is not only an offence but can get you in prison.</Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>2.</Text>
                                <Text style={styles.text1}>Do not criticize the regime or the ruling families.</Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>3.</Text>
                                <Text style={styles.text1}>Do not ever show disrespect to Buddha images, large or small, ruined or not which is regarded as the sacred object. And never climb onto one to take a photograph or do anything which might indicate a lack of respect. Sacrilegious acts are punishable by imprisonment even if committed by foreign visitors.</Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>4.</Text>
                                <Text style={styles.text1}>Do not ever take Buddha images out of the country, which is against the law unless special permission has been granted</Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>5.</Text>
                                <Text style={styles.text1}>Do not cross your legs when you are in the presence of a monk no matter you sitting on the floor or in a chair.

</Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>6.</Text>
                                <Text style={styles.text1}>Do not smoke in the street, nor to drop a litter in the street. You can be fined 2,000 Baht for doing so.

</Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>7.</Text>
                                <Text style={styles.text1}>Avoid using Tuk Tuk</Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>8.</Text>
                                <Text style={styles.text1}>Avoid visiting Pat Pong</Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>9.</Text>
                                <Text style={styles.text1}>Avoid Going to Public Places on the 13th April. </Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>10.</Text>
                                <Text style={styles.text1}>13th April is Songkran. Thai New Year Festival. This Festival is celebrated in similar Fashion Like holi using water as the means of expression.</Text>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    imgbck: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        alignItems: 'center'
    },
    v: {
        marginTop: 4,
        marginBottom: 4,
        width: Dimensions.get('window').width - 40,


    },

    text: {
        width: 30,
        fontSize: 17,
        color: '#ffffff',
    },
    text1: {
        width: Dimensions.get('window').width - 70,
        fontSize: 17,
        color: '#ffffff',


    }
})