import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
} from 'react-native';

export default class Weather extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <ImageBackground
                style={styles.imgbck}
                source={require("../images/41.png")}>
                <Myheader title={'WEATHER INFO'}
                    onpress={() => { this.props.navigation.pop() }} />

                <Text style={styles.yellow}>10th April</Text>
                <Text style={styles.white}>- 34 degrees in day with some clouds</Text>
                <Text style={styles.white}>- 25 degrees in night mostly clear</Text>
                <Text style={styles.yellow}>11th April</Text>
                <Text style={styles.white}>- 34 degrees in day mostly sunny with s shower or thunderstrom around in the afternoon</Text>
                <Text style={styles.white}>- 26 degrees in night clear to partly cloudy</Text>
                <Text style={styles.yellow}>12th April</Text>
                <Text style={styles.white}>-34 degrees in the day mostly sunny</Text>
                <Text style={styles.white}>-26 degrees in the night clear to partly cloudy</Text>
                <Text style={styles.yellow}>13th April</Text>
                <Text style={styles.white}>- 34 degrees in the day mostly sunny</Text>

            </ImageBackground>

        );
    }


}
const styles = StyleSheet.create({
    imgbck: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    yellow: {
        color: "#fffa00",
        fontWeight: 'bold',
        marginLeft: 20
    },
    white: {
        color: '#ffffff',
        marginLeft: 20,
        marginBottom: 10
    }

})