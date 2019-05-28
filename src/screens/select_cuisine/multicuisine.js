import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class MultiCuisine extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/19.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'MULTI CUISINE'}
                        onpress={() => { this.props.navigation.pop() }}
                    />

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('themulberry') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>THE MULBERRY</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('govinda') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>GOVINDA</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('cuisineunplugged') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>CUISINE UNPLUGGED</Text>
                        </View>
                    </TouchableOpacity>



                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    imgback: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
        color: '#ffffff',

    },
    back: {
        width: Dimensions.get('window').width - 20,
        height: 40,
        borderWidth: 2,
        justifyContent: 'center',
        borderColor: "#ffffff",
        marginTop: 7,
        marginBottom: 7,
        marginLeft: 7,
        marginRight: 7,
        alignSelf: 'center'
    }

})