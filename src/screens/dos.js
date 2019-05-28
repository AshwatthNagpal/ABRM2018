import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    ScrollView,
    View,
} from 'react-native';
import Myheader from '../component/MyHeader'
export default class Dos extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View>
                <ImageBackground style={styles.imgbck} source={require('../images/12.png')}>
                    <Myheader title={"DO'S"} onpress={() => { this.props.navigation.pop() }} />

                    <ScrollView >
                        <View >
                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>1.</Text>
                                <Text style={styles.text1}>Dress properly in all religious temples and shrines.</Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>2.</Text>
                                <Text style={styles.text1}>Do not ever go without sleeves or in shorts, hot pants or other unsuitable clothes.</Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>3.</Text>
                                <Text style={styles.text1}>Do remove your shoes before entering a temple.</Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>4.</Text>
                                <Text style={styles.text1}>Do treat monks with the highest respect. Buddhist Monks are forbidden to touch or be touched by a women,or to accept anything from the hands of the women</Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>5.</Text>
                                <Text style={styles.text1}>Do “wai” which is the traditional gesture of greeting and thanking. It is done by joining hands in  front of the chest and bending the head </Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>6.</Text>
                                <Text style={styles.text1}>Do exercise tolerance, particularly when  it comes to offer food, pay a bill or waiting for change. Expect a longer time from where you  come from. Do be patient and try to keep calm and no matter what the problem or provocation may be.</Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>7.</Text>
                                <Text style={styles.text1}>Do speak politely to the authorities to avoid to be sat around all day.</Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>8.</Text>
                                <Text style={styles.text1}>Do try to avoid conflict of any kind with any resident of Bangkok, because they can get hot tempered and react in very extreme ways in order not to “losing face”</Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>9.</Text>
                                <Text style={styles.text1}>Do keep smiling</Text>
                            </View>

                            <View flexDirection={'row'} style={styles.v}>
                                <Text style={styles.text}>10.</Text>
                                <Text style={styles.text1}>Do Checkout before 12 noon. Checkout process is a must</Text>
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